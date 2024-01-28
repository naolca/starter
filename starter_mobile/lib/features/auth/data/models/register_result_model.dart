import 'package:starter_mobile/shared/entities/register_result_entity.dart';

class RegisterResultModel extends RegisterResultEntity {
  RegisterResultModel({
    required String userId,
    required String token,
  }) : super(
          userId: userId,
          token: token,
        );

  factory RegisterResultModel.fromJson(Map<String, dynamic> json) {
    return RegisterResultModel(
      userId: json['userId'],
      token: json['token'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'token': token,
    };
  }
}
