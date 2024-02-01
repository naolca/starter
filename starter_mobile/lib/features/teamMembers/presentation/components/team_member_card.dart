// ignore_for_file: prefer_const_constructors

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:starter_mobile/features/teamMembers/domain/entities/team_member_entity.dart';

class TeamMemberCard extends StatelessWidget {
  final TeamMemberEntity teamMemberEntity;

  const TeamMemberCard({
    super.key,
    required this.teamMemberEntity,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10),
      child: SizedBox(
        height: 100, // Set the desired height
        width: MediaQuery.of(context).size.width -
            100, // Make the width 100px less than the screen width
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(
              color: Colors.blue,
              width: 2,
            ),
            color: Colors.white,
            borderRadius: BorderRadius.circular(10),
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.5),
                blurRadius: 7,
                offset: Offset(0, 3),
              ),
            ],
          ),
          child: Center(
            child: Container(
              padding: EdgeInsets.all(15),
              child: Column(
                children: [
                  Container(
                    child: CircleAvatar(
                      radius: 30.0,
                      backgroundImage:
                          NetworkImage('https://via.placeholder.com/150'),
                      backgroundColor: Colors.transparent,
                    ),
                  ),
                  Container(
                    child: Text(
                      teamMemberEntity.name,
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  Container(
                    child: Text(
                      teamMemberEntity.department,
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  Container(
                    child: Text(
                      teamMemberEntity.bio,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.normal,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
