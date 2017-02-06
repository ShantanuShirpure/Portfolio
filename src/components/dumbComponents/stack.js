import React from 'react'
import {Link} from 'react-router'


export default class Stack extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

  render() {
    console.log(this.props.text)
    console.log('glyphicons glyphicons-'+ this.props.glifclass)
    return (
	        	
	        <div class="tab settings-tab">
	            <i class={'glyphicon glyphicon-'+ this.props.glifclass}></i>
             <span class="stackName">{this.props.text}</span> 
                       
	        </div>
          

    );
  }
}
