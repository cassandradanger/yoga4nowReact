import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InfoPage.css';

class InfoPage extends Component {
  state = {
    poseName: '',
    imageUrl: '',
    purpose: 'Headache',
    tabStatus: ''
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
    this.props.dispatch({type: 'POST_POSE', payload: this.state})
  }

  updateTab = (e, tabSelection) => {
    this.setState({
      tabStatus: tabSelection
    })
  }

  render(){
    return(
      <div>
        <h1>
          Admin Page
        </h1>
        <button className="tabSelect" onClick={(e) => this.updateTab(e, 'add')}>Add Poses</button>
        <button className="tabSelect" onClick={(e) => this.updateTab(e, 'edit')}>Edit Poses</button>
        <button className="tabSelect" onClick={(e) => this.updateTab(e, 'delete')}>Delete Poses</button>

        {this.state.tabStatus === "add" &&
        <div class="addPose">
          <label htmlFor="pose">Pose Name:</label>
          <input id="pose" type="text" onChange={(e) => this.handleChange(e, 'poseName')}></input>
          <br/>
          {this.props.purpose &&
          <>
              <label htmlFor="purpose">Pose Purpose: </label>
              <select onChange={(e) => this.handleChange(e, 'purpose')}>
                {this.props.purpose.map((item) => {
                  return <option key={item.id} value={item.name}>{item.name}</option>
                })}
              </select>
          </>
          }
          <br/>
          <label htmlFor="imageUrl">Image URL:</label>
          <input id="imageUrl" type="text" onChange={(e) => this.handleChange(e, 'imageUrl')}></input>
          <div className="currentSelection">
            Your current selection:
            <p>{this.state.poseName}</p>
            <p>{this.state.purpose}</p>
            <img className="imgThumb" src={this.state.imageUrl}/>
            <br/>
            {this.state.poseName.length > 0 &&
              <button onClick={this.handleSubmit}>POST</button>
            }
          </div>
        </div>
        }
        {this.state.tabStatus === 'edit' &&
          <div class="editPose">
            Edit Poses
          </div>
        }
        {this.state.tabStatus === 'delete' &&
          <div class="deletePose">
            Delete Poses
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  purpose: state.purpose
});

export default connect(mapStateToProps)(InfoPage);
