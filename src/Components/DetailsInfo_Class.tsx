import * as React from 'react';

import { Stack, Text } from '@fluentui/react';
import { inject, observer } from 'mobx-react';

import { PageStore } from '../Store/PageStore';

interface DetailsInfoProps {
    pageStore?: PageStore
}

@inject("pageStore") @observer
export class DetailsInfo extends React.Component<DetailsInfoProps, {}> {

    public render() {
        let teams = this.props.pageStore?.getTeamInfoArr;       
        return (
            <Stack>
                {
                    teams?.map((teamInfo) => (
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

