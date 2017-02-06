import React from 'react'
import LeftNav from './../components/layout/leftNav'
import ContentPane from './../components/layout/contentPane'


export default class Layout extends React.Component {
  render() {
    // const { title } = this.props;

    return (
      <div class="container-fluid">

      	<LeftNav/> <ContentPane/>

    </div>
    );
  }
}