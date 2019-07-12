import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PosesGallery.css';

class AboutPage extends Component {
  state = {
    poseName: '',
    imageUrl: '',
    purpose: ''
  }

  componentDidMount = () => {
  }


  render(){
    return(
      <div>
        THIS IS THE Galllery
        {JSON.stringify(this.props.poses)}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  purpose: state.purpose,
  poses: state.poses,
});

export default connect(mapStateToProps)(AboutPage);
