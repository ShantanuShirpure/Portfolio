import React from 'react'
import TabPane from './../../components/dumbComponents/tab'
import RRimg from '../Assets/ReactRedux.png'
import Angimg from '../Assets/Angular.png'
import Bimg from '../Assets/bootstrap.png'
import Yimg from '../Assets/yarn.png'
import MGrid from '../GridComponents/mainGrid'


export default class FrontEnd extends React.Component {
  render() {
    // const { title } = this.props;

    return (
      <div class="container-fluid">

  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
    <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
    <TabPane imageInfo={RRimg} /></a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
    <TabPane imageInfo={Angimg} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={Bimg} /></a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">
    <TabPane imageInfo={Yimg} /></a></li>
  </ul>

  
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home"><MGrid/></div>
    <div role="tabpanel" class="tab-pane" id="profile">...</div>
    <div role="tabpanel" class="tab-pane" id="messages">...</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
  </div>
      

    </div>
    );
  }
}