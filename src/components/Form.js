import React from 'react'
import { connect } from 'react-redux'

const Form = (props) => (
  <form>
    <input type="text" name="search" placeholder="search" onChange={(event) => {props.searchNews(event.target.value)}}/>
  </form>
)

const mapDispatchToProps = (dispatch) => {
  return {
    searchNews: (keyword) => dispatch({
      type: 'SEARCH_NEWS',
      payloads: keyword
    })
  }
}

export default connect(null, mapDispatchToProps)(Form)
