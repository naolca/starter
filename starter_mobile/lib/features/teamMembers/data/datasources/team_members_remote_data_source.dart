import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/teamMembers/data/models/team_member_model.dart';
import 'package:http/http.dart' as http;

abstract class TeamMembersRemoteSource {
  Future<List<TeamMemberModel>> getTeamMembers();
}

class teamMembersRemoteSourceImpl implements TeamMembersRemoteSource {
  @override
  Future<List<TeamMemberModel>> getTeamMembers() async {
    final url = Uri.parse('https://a2sv-backend.onrender.com/api/success-stories');
    final headers = {'Content-Type': 'application/json'};

    final response = await http.get(url, headers: headers);
    if (response.statusCode == 200) {
      
      final List<TeamMemberModel> teamMembers = [];
      for (var i = 0; i < response.body.length; i++) {
        teamMembers.add(TeamMemberModel.fromJson(response.body[i] as Map<String, dynamic>));
      }
     
      return teamMembers;
    } else {
      throw Exception('Failed to load album');
    }
      

