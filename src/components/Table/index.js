import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SORTS } from '../../constants'
import { Button, SortButton } from '../Buttons'

class Table extends Component {
  state = {
    sortKey: 'NONE',
    isSortReverse: false
  }

  onSort = (sortKey) => {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse

    this.setState({
      sortKey,
      isSortReverse
    })
  }

  render() {
    const { list, onDismiss } = this.props
    const { sortKey, isSortReverse } = this.state

    const sortedList = SORTS[sortKey](list)
    const reverseSortedList = isSortReverse
      ? sortedList.reverse()
      : sortedList

    return (
      <div className="table">
        <div className="table-header">
          <span style={{width: '40%'}}>
            <SortButton
              sortKey={'TITLE'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Title
            </SortButton>
          </span>
          <span style={{width: '30%'}}>
            <SortButton
              sortKey={'AUTHOR'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Author
            </SortButton>
          </span>
          <span style={{width: '10%'}}>
            <SortButton
              sortKey={'COMMENTS'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Comments
            </SortButton>
          </span>
          <span style={{width: '10%'}}>
            <SortButton
              sortKey={'POINTS'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Points
            </SortButton>
          </span>
          <span style={{width: '10%'}}>
            Archive
          </span>
        </div>
        {reverseSortedList.map(item => {
          return (
            <div key={item.objectID} className="table-row">
              <span style={{ width: '40%' }}>
                <a href={item.url} target="_blank">{item.title}</a>
              </span>
              <span style={{ width: '30%' }}>
                {item.author}
              </span>
              <span style={{ width: '10%' }}>
                {item.num_comments}
              </span>
              <span style={{ width: '10%' }}>
                {item.points}
              </span>
              <span style={{ width: '10%' }}>
                <Button
                  className="button-inline"
                  onClick={() => onDismiss(item.objectID)}
                >
                  Dismiss
                </Button>
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired
}

export default Table