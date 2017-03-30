import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class Peoples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      // this.setState({data: data.results})
      this.props.getPeople(data.results)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <ul>
          <li><Link to='/'>news</Link></li>
          <li><Link to='/peoples'>peoples</Link></li>
        </ul>

        <h1>Peoples</h1>

          <ul>
              {this.props.people.map((item, index) => {
                return (
                  <li key={index}>{item.name} </li>
                )
              })
              }
          </ul>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: (results) => dispatch({
      type: 'GET_PEOPLE',
      payloads: results
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
