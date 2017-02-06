import React from 'react'
import TabPane from './../../components/layout/tab'
import Ion from '../Assets/iON_Logo.png'
import MQ from '../Assets/MQ.png'
import Solace from '../Assets/solace.png'
import FIX from '../Assets/FIX.png'



export default class Middleware extends React.Component {
  render() {
    // const { title } = this.props;

    return (
      <div class="container-fluid">

  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
    <a href="#home" aria-controls="home" role="tab" data-toggle="tab"><TabPane imageInfo={Ion} /></a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
    <TabPane imageInfo={MQ} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={Solace} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={FIX} /></a></li>
    
  </ul>

  
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">...</div>
    <div role="tabpanel" class="tab-pane" id="profile">...</div>
    <div role="tabpanel" class="tab-pane" id="messages">...</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
  </div>
      

    </div>
    );
  }
}