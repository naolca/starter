// login result entity class with feilds user, username, userRole, userEmail, userProfile and token

import 'package:equatable/equatable.dart';

class LoginResultEntity extends Equatable {
  final String user;
  final String username;
  final String userRole;
  final String userEmail;
  final String userProfile;
  final String token;

  LoginResultEntity({
    required this.user,
    required this.username,
    required this.userRole,
    required this.userEmail,
    required this.userProfile,
    required this.token,
  });

  @override
  List<Object?> get props =>
      [user, username, userRole, userEmail, userProfile, token];
}
