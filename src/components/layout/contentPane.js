import React from 'react'
import {Link} from 'react-router'
import FrontEndPane from './../../components/Tabs/frontend'
import MiddleWare from './../../components/Tabs/middleware'
import Server from './../../components/Tabs/Server'
import Database from './../../components/Tabs/database'
	
export default class ContentPane extends React.Component {

  
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

 

  render() {

    

    return (
     	<div class="content-pane">
       
       <FrontEndPane/>
       <MiddleWare/>
       <Server/>
       <Database/>

</div>
      
      
    );
  }
}
