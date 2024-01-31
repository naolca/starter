// TeamMember Entity with fields socialMedia, id, name, bio, department
import 'package:equatable/equatable.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/social_media_entity.dart';

class TeamMemberEntity extends Equatable {
  final SocialMediaEntity socialMedia;
  final String id;
  final String name;
  final String bio;
  final String department;

  TeamMemberEntity({
    required this.socialMedia,
    required this.id,
    required this.name,
    required this.bio,
    required this.department,
  });

  @override
  List<Object?> get props => [socialMedia, id, name, bio, department];
}
