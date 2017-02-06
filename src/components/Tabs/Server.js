import React from 'react'
import TabPane from './../../components/dumbComponents/tab'
import AspMVC from '../Assets/aspmvc.png'
import Webapi from '../Assets/webapi.png'
import Bluemix from '../Assets/bluemix.png'
import NUnit from '../Assets/nUnit.png'



export default class Server extends React.Component {
  render() {
    // const { title } = this.props;

    return (
      <div class="container-fluid">

  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
    <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
    <TabPane imageInfo={AspMVC} /></a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
    <TabPane imageInfo={Webapi} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={NUnit} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={Bluemix} /></a></li>
    
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