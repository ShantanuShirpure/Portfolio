import React from 'react'
import {Link} from 'react-router'


export default class Stack extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

  render() {
    console.log(this.props.text)
    return (
	        	
	        <div class="tab settings-tab">
	            <i class="glyphicon glyphicon-cog"></i>
              {this.props.text}
	        </div>

    );
  }
}
