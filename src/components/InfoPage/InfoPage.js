import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InfoPage.css';

class InfoPage extends Component {
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

  render(){
    return(
      <div>
        <h1>
          Admin Page
        </h1>
        <div>
          <label htmlFor="pose">Pose Name:</label>
          <input id="pose" type="text" onChange={(e) => this.handleChange(e, 'poseName')}></input>
          <br/>
          {this.props.purpose &&
          <>
              <label htmlFor="purpose">Pose Purpose: </label>
              <select onChange={(e) => this.handleChange(e, 'purpose')}>
                {this.props.purpose.map((item) => {
                  return <option key={item.id} value={item.purpose}>{item.purpose}</option>
                })}
              </select>
          </>
          }
          <br/>
          <label htmlFor="imageUrl">Image URL:</label>
          <input id="imageUrl" type="text" onChange={(e) => this.handleChange(e, 'imageUrl')}></input>
        </div>

        <div className="currentSelection">
          Your current selection:
          <p>{this.state.poseName}</p>
          <p>{this.state.purpose}</p>
          <img className="imgThumb" src={this.state.imageUrl}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  purpose: state.purpose
});

export default connect(mapStateToProps)(InfoPage);
