from flask import Blueprint, request, jsonify
from app import mongo, bcrypt

from flask_jwt_extended import create_access_token
from datetime import timedelta

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"msg": "Invalid Credentials"}), 400

        # Extract all fields
        email = data.get('email')
        password = data.get('password')
        first_name = data.get('firstName')
        middle_name = data.get('middleName')
        last_name = data.get('lastName')
        army_number = data.get('armyNumber')
        id_number = data.get('idNumber')
        department = data.get('department')
        region = data.get('region')
        work_type = data.get('workType')

        # Validate required fields
        required_fields = {
            "email": email,
            "password": password,
            "firstName": first_name,
            "lastName": last_name,
            "armyNumber": army_number,
            "idNumber": id_number,
            "department": department,
            "region": region,
            "workType": work_type
        }

        missing_fields = [k for k, v in required_fields.items() if not v]
        if missing_fields:
            return jsonify({"msg": f"Missing fields: {', '.join(missing_fields)}"}), 400

        # Check if user already exists
        if mongo.db.users.find_one({'email': email}):
            return jsonify({"msg": "User already exists"}), 403

        # Hash the password
        hashed_password = bcrypt.generate_password_hash(
            password).decode('utf-8')

        # Create user document
        userdata = {
            'email': email,
            'password': hashed_password,
            'firstName': first_name,
            'middleName': middle_name,
            'lastName': last_name,
            'armyNumber': army_number,
            'idNumber': id_number,
            'department': department,
            'region': region,
            'workType': work_type
        }

        # Insert into MongoDB
        result = mongo.db.users.insert_one(userdata)

        # Add the inserted_id to the user data object
        userdata['_id'] = str(result.inserted_id)

        # Remove the password before sending response
        userdata.pop('password', None)

        # Generate JWT token
        access_token = create_access_token(
            identity=email, expires_delta=timedelta(hours=1))

        return jsonify({
            "msg": "User created successfully",
            "user_data": userdata,
            # "user_id": str(result.inserted_id),
            "access_token": access_token
        }), 201

    except Exception as e:
        return jsonify({"msg": "Error creating user", "error": str(e)}), 500
