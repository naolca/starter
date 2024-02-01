// team member model that has json and from jsom methods

import 'package:starter_mobile/features/teamMembers/data/models/socia_media_model.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/team_member_entity.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/social_media_entity.dart';

class TeamMemberModel extends TeamMemberEntity {
  TeamMemberModel({
    required SocialMediaEntity socialMedia,
    required String id,
    required String name,
    required String bio,
    required String department,
  }) : super(
          socialMedia: socialMedia,
          id: id,
          name: name,
          bio: bio,
          department: department,
        );

  factory TeamMemberModel.fromJson(Map<String, dynamic> json) {
    return TeamMemberModel(
      socialMedia: SocialMediaModel.fromJson(json['socialMedia']),
      id: json['_id'],
      name: json['name'],
      bio: json['bio'],
      department: json['department'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'socialMedia': socialMedia,
      'id': id,
      'name': name,
      'bio': bio,
      'department': department,
    };
  }
}
