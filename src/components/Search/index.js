import React, { Component } from 'react'

class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus()
      this.input.selectionStart = this.input.value.length
      this.input.selectionEnd = this.input.value.length
    }
  }

  render() {
    const {
      value,
      onChange,
      onSubmit,
      children
    } = this.props

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={node => this.input = node}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    )
  }
}

export default Search