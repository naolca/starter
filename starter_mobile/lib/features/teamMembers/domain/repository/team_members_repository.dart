import 'package:dartz/dartz.dart';
import 'package:starter_mobile/core/errors/failures.dart';
import "../entities/team_member_entity.dart";

abstract class TeamMembersRepository {
  Future<Either<Failure, List<TeamMemberEntity>>> getTeamMembers();
}
