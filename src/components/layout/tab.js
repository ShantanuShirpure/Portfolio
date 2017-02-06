import React from 'react'
import {Link} from 'react-router'



export default class Tab extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }

  render() {
    console.log(this.props.imageInfo + " this is image path")
    
    return (
	        	
	        <div class="tab settings-tab">
	            <img src={this.props.imageInfo} width="100" height="100" />  

                       
	        </div>
          

    );
  }
}
