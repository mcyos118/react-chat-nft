/**
 * Created by hshen on 9/27/16.
 */
/**
 * Created by hshen on 9/24/16.
 */

import React, { Component, PropTypes } from 'react';
import {  browserHistory } from 'react-router';
import Singleton from 'js/socket'

import 'css/connectWallet.less'

export default class ConnectWallet extends Component {

    constructor(props, context) {
        super(props, context);
        this.socket = Singleton.getInstance();
    }

    handleConnectWallet(event) {
        event.preventDefault();
        browserHistory.push('/signin');
    }

    render() {
        const { messages} = this.props;
        return (
            <div className="page">
                <div className="form">
                    <div className="bg">
                        <img src='/assets/bg-1.png' alt='bg' />
                    </div>
                    <h3 className="title">Connect to chat room with your NFT</h3>
                    <button type='button' className="button" onClick={this.handleConnectWallet.bind(this)}>Connect Wallet</button>
                </div>
            </div>
        );
    }
}
