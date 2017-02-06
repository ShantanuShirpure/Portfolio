import React from 'react'
import TabPane from './../../components/layout/tab'
import SqlServer from '../Assets/sqlServer.png'
import MemSql from '../Assets/MemSql.jpg'
import mongoDb from '../Assets/mongodb.png'
import Druid from '../Assets/druid.png'



export default class Database extends React.Component {
  render() {
    // const { title } = this.props;

    return (
      <div class="container-fluid">

  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
    <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
    <TabPane imageInfo={SqlServer} /></a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
    <TabPane imageInfo={MemSql} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={mongoDb} /></a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
    <TabPane imageInfo={Druid} /></a></li>
    
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