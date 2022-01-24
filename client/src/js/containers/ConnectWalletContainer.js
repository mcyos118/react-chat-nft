 import React, { Component, PropTypes } from 'react';
 import { connect } from 'react-redux';
 import {bindActionCreators} from 'redux';
 
 import ConnectWallet from 'js/components/connectWallet/ConnectWallet';
 import * as actions from 'js/actions/actions';
 
 class ConnectWalletContainer extends Component {
     render() {
         return (
             <ConnectWallet {...this.props} />
         );
     }
 }
 
 export default connect()(ConnectWalletContainer)
 