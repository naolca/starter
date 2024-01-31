import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/team_member_entity.dart';
import 'package:starter_mobile/features/teamMembers/domain/repository/team_members_repository.dart';

class GetTeamMembers {
  final TeamMembersRepository repository;

  GetTeamMembers(this.repository);

  Future<Either<Failure, List<TeamMemberEntity>>> getTeamMembers() async {
    return await repository.getTeamMembers();
  }
}
