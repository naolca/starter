import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:starter_mobile/features/teamMembers/presentation/pages/team_members_page.dart';

class HomePage extends StatelessWidget {
  HomePage({Key? key}) : super(key: key);

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData.light(),
      child: Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          backgroundColor: Colors.white,
          elevation: 0,
          titleSpacing: 0,
          leading: IconButton(
            color: Colors.blue,
            icon: const Icon(Icons.menu),
            onPressed: () => _scaffoldKey.currentState?.openDrawer(),
          ),
          title: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'A2SV',
                  style: GoogleFonts.pacifico(
                    textStyle: const TextStyle(
                      color: Colors.blue,
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
          ),
          actions: const [
            Padding(
              padding: EdgeInsets.only(right: 16.0),
              child: CircleAvatar(child: _ProfileIcon()),
            )
          ],
        ),
        drawer: Drawer(
          child: ListView(
            children: _menuItems
                .map((item) => ListTile(
                      onTap: () {
                        WidgetsBinding.instance.addPostFrameCallback((_) {
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                builder: (context) => item['page'] as Widget,
                              ));
                        });
                        _scaffoldKey.currentState?.openEndDrawer();
                      },
                      title: Text(item['path'] as String),
                    ))
                .toList(),
          ),
        ),
        body: const Center(
          child: Text(
            "Body",
          ),
        ),
      ),
    );
  }

  Widget _drawer() => Drawer(
        child: ListView(
          children: _menuItems
              .map((item) => ListTile(
                    onTap: () {
                      _scaffoldKey.currentState?.openEndDrawer();
                    },
                    title: Text(item['path'] as String),
                  ))
              .toList(),
        ),
      );

  Widget _navBarItems() => Row(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: _menuItems
            .map(
              (item) => InkWell(
                onTap: () {},
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 24.0, horizontal: 16),
                  child: Text(
                    item['path'] as String,
                    style: const TextStyle(fontSize: 18),
                  ),
                ),
              ),
            )
            .toList(),
      );
}

final List<Map<String, dynamic>> _menuItems = <Map<String, dynamic>>[
  {'path': 'About', 'page': HomePage()},
  {'path': 'Success Stories', 'page': TeamMembersPage()},
  {'path': 'Blogs', 'page': HomePage()},
  {'path': 'Teams', 'page': TeamMembersPage()},
  {'path': 'Stories', 'page': HomePage()}
];

enum Menu { itemOne, itemTwo, itemThree }

class _ProfileIcon extends StatelessWidget {
  const _ProfileIcon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<Menu>(
        icon: const Icon(Icons.person),
        offset: const Offset(0, 40),
        onSelected: (Menu item) {
          // switched statement
          print('selected');
          switch (item) {
            case Menu.itemOne:
              print('Account');
              break;
            case Menu.itemTwo:
              print('Settings');
              break;
            case Menu.itemThree:
              print('Sign Out');
              break;
          }
        },
        itemBuilder: (BuildContext context) => <PopupMenuEntry<Menu>>[
              const PopupMenuItem<Menu>(
                value: Menu.itemOne,
                child: Text('Account'),
              ),
              const PopupMenuItem<Menu>(
                value: Menu.itemTwo,
                child: Text('Settings'),
              ),
              const PopupMenuItem<Menu>(
                value: Menu.itemThree,
                child: Text('Sign Out'),
              ),
            ]);
  }
}
