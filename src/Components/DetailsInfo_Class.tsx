import * as React from 'react';

import { PersonInfo, TeamInfo } from '../Model/PageModel';
import { Stack, Text } from '@fluentui/react';

export class DetailsInfo extends React.Component {

    private infoArray: PersonInfo[] = [
        {"Name": "Tom", "Team": "Tom & Jerry", "Sex": "male"},
        {"Name": "Lei Li", "Team": "English Learning", "Sex": "male"},
        {"Name": "Meimei Han", "Team": "English Learning", "Sex": "female"},
        {"Name": "Jerry", "Team": "Tom & Jerry", "Sex": "male"}
    ];

    private getTeamInfoArr(infoArray: PersonInfo[]): TeamInfo[] {
        let teamInfoArray: TeamInfo[] = new Array<TeamInfo>();
        let teamInfoMap: Map<String, PersonInfo[]> = new Map();
        infoArray.forEach((personInfo) => {
            if (!teamInfoMap.has(personInfo.Team)) {
                teamInfoMap.set(personInfo.Team, new Array<PersonInfo>());
            }
            teamInfoMap.get(personInfo.Team)?.push(personInfo);
        });
        // console.log(teamInfoMap);
        teamInfoMap.forEach((personArr, teamName) => {
            teamInfoArray.push({
                TeamName: teamName.toString(), 
                Persons: personArr
            });
        });
        // console.log(teamInfoArray);
        return teamInfoArray;
    }

    public render() {
        let teams = this.getTeamInfoArr(this.infoArray);        
        return (
            <Stack>
                {
                    teams.map((teamInfo) => (
                        <Stack>
                            <Text variant={"xLarge"}>{teamInfo.TeamName}</Text>
                            {
                                teamInfo.Persons.map((personInfo) => (
                                    <Stack>
                                        {personInfo.Name + '-' + personInfo.Sex}
                                    </Stack>
                                ))
                            }
                        </Stack>
                    ))
                }
            </Stack>
        );
    }
}

