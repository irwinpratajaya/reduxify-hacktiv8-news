const newsReducer = (state= {news: [], filterResult: []}, action, ) => {
  switch (action.type) {
    case 'GET_NEWS':
      return Object.assign({}, state, {news: action.payloads, filterResult: action.payloads})
    case 'SEARCH_NEWS':
      var check = (data) => {
        var filterPattern = new RegExp(action.payloads,'gi')
        if (filterPattern.test(data.title)) {
          return true
        }
      }
      let resultFilter = state.news.filter(check)
      return Object.assign({}, state, {filterResult: resultFilter})
    default:
      return state
  }
}

export default newsReducer
