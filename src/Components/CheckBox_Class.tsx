import * as React from 'react';

import { Checkbox, Stack } from '@fluentui/react';
import { inject, observer } from 'mobx-react';

import { PageStore } from '../Store/PageStore';

interface CheckBoxSexProps {
    pageStore?: PageStore
}

@inject("pageStore") @observer
export class CheckBoxSex extends React.Component<CheckBoxSexProps, {}> {

    // Used to add spacing between checkboxes
    private stackTokens = { childrenGap: 10 };

    public render() {
        console.log("CheckBoxSex render");
        return (
            this.props.pageStore?.loadingStatus ?
                <Stack tokens={this.stackTokens}>
                    <Checkbox label="female" defaultChecked onChange={this.onChange("female", this)}  />
                    <Checkbox label="male" defaultChecked onChange={this.onChange("male", this)} />
                </Stack>
                : null
        );
    }

    private onChange = (sexType: string, that: this) => {
        return (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => this._onChange(sexType, that, checked);
    }

    private _onChange(sexType: string, that: this, isChecked?: boolean, ) {
        that.props.pageStore?.changeFilter(sexType, isChecked); 
    }
}

