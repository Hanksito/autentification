"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route("/register", methods=["POST"])
def create_user():
    
    username = request.json.get("username")
    email = request.json.get("email")
    password = request.json.get("password")
    user = User(email = email, password = password, username = username)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg":"user register"})

@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user  = User.query.filter_by(username = username).first()
    if username != user.username or password != user.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

@api.route("/privado", methods = ["GET"])
@jwt_required()
def privado():
    identity = get_jwt_identity()
    user = User.query.filter_by(email = identity).one_or_none()
    return jsonify({"msg":True}),200
