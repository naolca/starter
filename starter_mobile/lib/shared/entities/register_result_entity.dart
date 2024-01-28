// equatable user entity class with fields userId and token

import 'package:equatable/equatable.dart';

class RegisterResultEntity extends Equatable {
  final String userId;
  final String token;

  RegisterResultEntity({
    required this.userId,
    required this.token,
  });

  @override
  List<Object?> get props => [userId, token];
}
