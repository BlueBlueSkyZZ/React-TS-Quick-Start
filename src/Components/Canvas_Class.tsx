import * as React from 'react';

import {CheckBoxSex} from './CheckBox_Class';
import {DetailsInfo} from './DetailsInfo_Class';

export class Canvas extends React.Component {

    public render() {
        return (
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
                        <DetailsInfo />
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg9">
                        <CheckBoxSex />
                    </div>
                </div>
            </div>
        );
    }
}