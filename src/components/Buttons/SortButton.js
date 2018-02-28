import React from 'react'
import classNames from 'classnames'
import Button from './Button'

const SortButton = ({
  sortKey,
  activeSortKey,
  onSort,
  children
}) => {
  const sortClass = classNames({
    'button-inline': true,
    'button-active': sortKey === activeSortKey
  })

  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}
    >
      {children}
    </Button>
  )
}

export default SortButton