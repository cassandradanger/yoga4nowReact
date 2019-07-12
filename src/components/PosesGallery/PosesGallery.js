import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PosesGallery.css';
import NavigateNext from '@material-ui/icons/NavigateNext'; 
import NavigateBefore from '@material-ui/icons/NavigateBefore'; 

class AboutPage extends Component {
  state = {
    currentNumber: 0,
    currentSpeed: 5000
  }


changeImage = (e, direction) => {
  console.log(direction)
  if(direction === 'back'){
    this.setState({
      currentNumber: this.state.currentNumber <=0 ? this.props.poses.length -1 : this.state.currentNumber - 1
    })
  } else if(direction === 'forward'){
    this.setState({
      currentNumber: this.state.currentNumber >= this.props.poses.length -1 ? 0 : this.state.currentNumber + 1
    })
  }

}

  render(){
    return(
      <div>
        {this.props.poses.length > 0 &&
          <div className="showIt">
            <button className="galleryButton" onClick={(e) => this.changeImage(e, 'back')}><NavigateBefore fontSize="large"/></button>
            <img className="galleryImage" src={this.props.poses[this.state.currentNumber].imageUrl}/>
            <button className="galleryButton" onClick={(e) => this.changeImage(e, 'forward')}><NavigateNext fontSize="large"/></button>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  purpose: state.purpose,
  poses: state.poses,
});

export default connect(mapStateToProps)(AboutPage);
