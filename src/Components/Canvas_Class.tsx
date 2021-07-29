import * as React from 'react';

import {Provider, observer} from 'mobx-react'

import { CheckBoxSex } from './CheckBox_Class';
import { DetailsInfo } from './DetailsInfo_Class';
import { PageStore } from '../Store/PageStore';

@observer
export class Canvas extends React.Component {

    private pageStore: PageStore;

    constructor(props: any) {
        super(props);
        this.pageStore = new PageStore(); 
         
    }

    public render() {
        console.log("Canvas render");
        return (
            this.pageStore?.loadingStatus === true ? 
                <Provider pageStore={this.pageStore}>
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
                </Provider>
                : null
        );
    }

    public componentDidMount() {
        console.log("Canvas componentDidMount");
        this.pageStore.queryData();
    }

}