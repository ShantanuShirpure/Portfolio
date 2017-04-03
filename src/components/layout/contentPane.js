import React from 'react'
import {Link} from 'react-router'
import FrontEndPane from './../../components/Tabs/frontend'
import MiddleWare from './../../components/Tabs/middleware'
import Server from './../../components/Tabs/Server'
import Database from './../../components/Tabs/database'
import{connect} from 'react-redux'

@connect((store) => {
  return {
  		tab: store.profile.activeLeftTab
  		
    };
})

export default class ContentPane extends React.Component {

  
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

 

  render() {
    console.log(this.props.tab);
    
    let tabName = "Shantanu";
      if (this.props.tab==="Frontend")
        tabName=  <FrontEndPane/>;
      if (this.props.tab==="Middleware")
        tabName =<MiddleWare/>;
      if (this.props.tab==="Server")
        tabName = <Server/>;
      if (this.props.tab==="Database")
        tabName = <Database/>;
    return (
     	<div class="content-pane">
       
      {tabName} 

</div>
      
      
    );
  }
}
