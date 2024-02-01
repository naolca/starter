import 'dart:convert';

import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/teamMembers/data/models/team_member_model.dart';
import 'package:http/http.dart' as http;

abstract class TeamMembersRemoteSource {
  Future<List<TeamMemberModel>> getTeamMembers();
}

class TeamMembersRemoteSourceImpl implements TeamMembersRemoteSource {
  @override
  Future<List<TeamMemberModel>> getTeamMembers() async {
    final url = Uri.parse('https://a2sv-backend.onrender.com/api/members');
    final headers = {'Content-Type': 'application/json'};

    final response = await http.get(url, headers: headers);
    if (response.statusCode == 200) {
      final List<dynamic> res = json.decode(response.body);

      final List<TeamMemberModel> teamMembers = [];
      for (var i = 0; i < res.length; i++) {
        if (res[i] != null) {
          TeamMemberModel teamMemberModel = TeamMemberModel.fromJson(res[i]);
          print(teamMemberModel);
          teamMembers.add(teamMemberModel);
        } else {
          print('Null value found at index $i');
        }
      }
      print("inside remote source");
      print(teamMembers);
      return teamMembers;
    } else {
      throw Exception("cannot get team members");
    }
  }
}
