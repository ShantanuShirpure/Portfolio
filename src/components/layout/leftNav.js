import React from 'react'
import {Link} from 'react-router'
import Stack from './../../components/layout/stack'


export default class LeftNav extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

  render() {
    return (
     	<div class="vertical-menu">
	        	
	        <div class="tab  ">
	            <i class="glyphicon glyphicon-user activeTab  "></i>
	        </div>
	        <Stack/>
            <Stack/>
            <Stack/>
            <Stack/>
    	</div>
    );
  }
}
