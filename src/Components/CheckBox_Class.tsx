import * as React from 'react';

import { Checkbox, Stack } from '@fluentui/react';

export class CheckBoxSex extends React.Component {

    // Used to add spacing between checkboxes
    private stackTokens = { childrenGap: 10 };
    
    public render() {
        return (
            <Stack tokens={this.stackTokens}>
                <Checkbox label="female" defaultChecked onChange={this._onChange} />
                <Checkbox label="male" defaultChecked onChange={this._onChange} />
            </Stack>
        );
    }

    private _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean) {
        console.log(`The option has been changed to ${isChecked}.`);
    }
}

// export default CheckBoxSex;