import React from 'react'
import {Link} from 'react-router'
import FrontEndPane from './../../components/layout/frontend'
import MiddleWare from './../../components/layout/middleware'
import Server from './../../components/layout/Server'
import Database from './../../components/layout/database'
	
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
