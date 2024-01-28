// auth model class that extends auth entity

import 'package:starter_mobile/features/auth/model/entities/auth_entity.dart';

class AuthModel extends AuthEntity {
  AuthModel({
    required String email,
    required String password,
    String? name,
  }) : super(email: email, password: password, name: name);

  factory AuthModel.fromJson(Map<String, dynamic> json) {
    return AuthModel(
      email: json['email'],
      password: json['password'],
      name: json['name'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'email': email,
      'password': password,
      'name': name,
    };
  }
}
