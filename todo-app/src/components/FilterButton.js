import React from 'react'
import {setVisibilityFilter} from '../actions'

import { connect } from 'react-redux'

const FilterButton = ({active, onClick, children }) => {
  return (
    <button
      onClick ={ onClick }
      disabled = { active }
    >
      { children }
    </button>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  
  return {
  active: ownProps.filter === state.visibilityFilter
}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)