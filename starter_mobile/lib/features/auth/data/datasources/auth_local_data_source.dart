import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';
import 'package:starter_mobile/features/auth/data/models/login_result_model.dart';
import 'package:starter_mobile/shared/entities/login_result_entity.dart';

abstract class AuthLocalDataSource {
  Future<LoginResultModel> getUser();
  Future<void> cacheUser(LoginResultModel authResultModel);
  Future<void> clearUser();
}

class AuthLocalDataSourceImpl implements AuthLocalDataSource {
  final SharedPreferences sharedPreferences;

  AuthLocalDataSourceImpl({required this.sharedPreferences});
  @override
  Future<void> cacheUser(LoginResultModel authResultModel) {
    return sharedPreferences.setString(
        'CACHED_USER', authResultModel.toJson().toString());
  }

  @override
  Future<void> clearUser() {
    // TODO: implement clearUser
    throw UnimplementedError();
  }

  @override
  Future<LoginResultModel> getUser() {
    final jsonString = sharedPreferences.getString("CACHED_USER");
    if (jsonString != null) {
      return Future.value(LoginResultModel.fromJson(json.decode(jsonString)));
    } else {
      throw Exception();
    }
  }
}
