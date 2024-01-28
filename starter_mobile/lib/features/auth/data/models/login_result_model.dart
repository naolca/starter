import 'package:starter_mobile/shared/entities/login_result_entity.dart';

class LoginResultModel extends LoginResultEntity {
  LoginResultModel({
    required String user,
    required String username,
    required String userRole,
    required String userEmail,
    required String userProfile,
    required String token,
  }) : super(
          user: user,
          username: username,
          userRole: userRole,
          userEmail: userEmail,
          userProfile: userProfile,
          token: token,
        );

  factory LoginResultModel.fromJson(Map<String, dynamic> json) {
    return LoginResultModel(
      user: json['user'],
      username: json['username'],
      userRole: json['userRole'],
      userEmail: json['userEmail'],
      userProfile: json['userProfile'],
      token: json['token'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'user': user,
      'username': username,
      'userRole': userRole,
      'userEmail': userEmail,
      'userProfile': userProfile,
      'token': token,
    };
  }
}
