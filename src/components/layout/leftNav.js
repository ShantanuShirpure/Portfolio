import React from 'react'
import {Link} from 'react-router'
import Stack from './../../components/dumbComponents/stack'


export default class LeftNav extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

  render() {
    return (
     	<div class="vertical-menu">
	        	
	        <Stack text="Shantanu" glifclass="user"/>
	        <Stack text="Frontend" glifclass="blackboard"/>
           <Stack text="Middleware" glifclass="transfer"/>
            <Stack text="Server" glifclass="open"/>
            <Stack text="Database" glifclass="duplicate"/>
    	</div>
    );
  }
}
