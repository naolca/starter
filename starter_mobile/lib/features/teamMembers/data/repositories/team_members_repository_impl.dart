// team members repository implementation

import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import 'package:starter_mobile/features/teamMembers/data/datasources/team_members_remote_data_source.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/team_member_entity.dart';
import 'package:starter_mobile/features/teamMembers/domain/repository/team_members_repository.dart';
import '../datasources/team_members_remote_data_source.dart';

class TeamMembersRepositoryImpl implements TeamMembersRepository {
  final TeamMembersRemoteSource teamMembersRemoteSource;

  TeamMembersRepositoryImpl(this.teamMembersRemoteSource);

  @override
  Future<Either<Failure, List<TeamMemberEntity>>> getTeamMembers() async {
    try {
      final teamMembers = await teamMembersRemoteSource.getTeamMembers();
      print("inside repository");
      print(teamMembers);
      return Right(teamMembers);
    } catch (e) {
      print(e);
      return Left(ServerFailure());
    }
  }
}
