from flask import Blueprint, request, jsonify
from app import mongo
import bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"msg": "Missing JSON in request"}), 400

        email = data.get('email')
        password = data.get('password')

        if not email:
            return jsonify({"msg": "Missing email parameter"}), 401
        if not password:
            return jsonify({"msg": "Missing password parameter"}), 402

        existing_user = mongo.db.users.find_one({'email': email})
        if existing_user:
            return jsonify({"msg": "User already exists"}), 403

        hashed_password = bcrypt.hashpw(
            password.encode('utf-8'), bcrypt.gensalt())

        userdata = {
            'email': email,
            'password': hashed_password
        }

        result = mongo.db.users.insert_one(userdata)
        access_token = create_access_token(
            identity=email, expires_delta=timedelta(hours=1))

        return jsonify({"msg": "User created successfully",
                        'user_id': str(result.inserted_id),
                        'access_token': access_token
                        }), 201

    except Exception as e:
        return jsonify({"msg": "Error creating user", "error": str(e)}), 500
