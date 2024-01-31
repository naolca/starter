import 'dart:convert';
import 'package:starter_mobile/features/auth/data/models/auth_model.dart';
import 'package:starter_mobile/features/auth/data/models/login_result_model.dart';
import 'package:starter_mobile/features/auth/data/models/register_result_model.dart';
import 'package:http/http.dart' as http;

abstract class AuthRemoteDataSource {
  Future<LoginResultModel> loginUser(AuthModel authModel);
  Future<RegisterResultModel> registerUser(AuthModel authModel);
  Future<void> logoutUser();
}

class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
  @override
  Future<LoginResultModel> loginUser(AuthModel authModel) async {
    print("the data in remote");
    final url = Uri.parse(
        'https://a2sv-backend.onrender.com/api/auth/login'); //Repclace Your Endpoint
    final headers = {'Content-Type': 'application/json'};
    final body =
        jsonEncode({"email": authModel.email, "password": authModel.password});

    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
      final LoginResultModel loginResultModel =
          LoginResultModel.fromJson(json.decode(response.body));
      return loginResultModel;
    } else {
      throw Exception('Failed to load album');
    }
  }

  @override
  Future<void> logoutUser() {
    // TODO: implement logoutUser
    throw UnimplementedError();
  }

  @override
  Future<RegisterResultModel> registerUser(AuthModel authModel) async {
    final url = Uri.parse(
        'https://a2sv-backend.onrender.com/api/auth/login'); //Repclace Your Endpoint
    final headers = {'Content-Type': 'application/json'};
    final body = jsonEncode({authModel.toJson()});

    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
      final RegisterResultModel registerResultModel =
          RegisterResultModel.fromJson(jsonDecode(response.body));
      return registerResultModel;
    } else {
      throw Exception('Failed to load album');
    }
  }
}
