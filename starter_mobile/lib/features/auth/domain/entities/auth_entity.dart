////////
///
///auth entity class with fields email and password and possibly null feild name
///
///

import 'package:equatable/equatable.dart';

class AuthEntity extends Equatable {
  final String email;
  final String password;
  final String? name;

  AuthEntity({
    required this.email,
    required this.password,
    this.name,
  });

  @override
  List<Object?> get props => [email, password, name];
}
