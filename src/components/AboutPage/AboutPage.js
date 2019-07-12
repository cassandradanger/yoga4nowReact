import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutPage.css';
import PosesGallery from '../PosesGallery/PosesGallery'
class AboutPage extends Component {
  state = {
    poseName: '',
    imageUrl: '',
    purpose: ''
  }

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_PURPOSE'})
  }

  handleChange = (event, inputReason) => {
    console.log(event.target.value);
    this.setState({
      [inputReason]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.purpose);
    this.props.dispatch({type: 'FETCH_POSES', payload: this.state.purpose})
  }
  render(){
    return(
      <div>
        <h1>
          Yoga 4 Now
        </h1>
        <div>
          {this.props.purpose &&
          <>
              <label htmlFor="purpose">Select Purpose: </label>
              <select onChange={(e) => this.handleChange(e, 'purpose')}>
                {this.props.purpose.map((item) => {
                  return <option key={item.id} value={item.purpose}>{item.purpose}</option>
                })}
              </select>
          </>
          }
          <button onClick={this.handleSubmit}>YOGA!</button>
        </div>
        <PosesGallery posesArray={this.props.poses}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  purpose: state.purpose,
  poses: state.poses,
});

export default connect(mapStateToProps)(AboutPage);
