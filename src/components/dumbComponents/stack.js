import React from 'react'
import {Link} from 'react-router'
import{connect} from 'react-redux'
import {selectActivateTab} from '../../actions/navActions.js'


@connect((store) => {
  return {
  		tab: store.profile.activeLeftTab
  		
    };
})

export default class Stack extends React.Component {
  componentWillMount() {
    
  }
  componentDidUpdate(){
  }
  activateTab(val){
    this.props.dispatch(selectActivateTab(val));
    //console.log("call action "+ val);
  }
  render() {
   //console.log(this.props)
    //console.log('glyphicons glyphicons-'+ this.props.glifclass)
    return (
	        	
	        <div class="tab settings-tab" onClick={this.activateTab.bind(this,this.props.text)}>
	            <i class={'glyphicon glyphicon-'+ this.props.glifclass}></i>
              <br/>
             <span class="stackName">{this.props.text}</span> 
                       
	        </div>
          

    );
  }
}
