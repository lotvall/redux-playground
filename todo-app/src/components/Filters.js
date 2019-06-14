import React from 'react'
import FilterButton from './FilterButton'
import { VisibilityFilters } from '../actions'


const Filters = () => {
  return (
    <div>
      <span> Show: </span>
        <FilterButton filter= {VisibilityFilters.SHOW_ALL}> Show All </FilterButton>
        <FilterButton filter= {VisibilityFilters.SHOW_COMPLETED}> Show Completed </FilterButton>
        <FilterButton filter= {VisibilityFilters.SHOW_ACTIVE}> Show Active </FilterButton>
      
    </div>
  )
}

export default Filters