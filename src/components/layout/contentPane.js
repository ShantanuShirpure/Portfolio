import React from 'react'
import {Link} from 'react-router'


export default class ContentPane extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

  render() {
    return (
     	<div class="content-pane">
	        	   
	        <ul class="nav nav-tabs">
  <li class="nav-item ">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
    	</div>
    );
  }
}
