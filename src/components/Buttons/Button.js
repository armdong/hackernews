import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  className,
  onClick,
  children
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  className: ''
}

export default Button