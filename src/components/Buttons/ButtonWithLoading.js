import React from 'react'
import Button from './Button'

const Loading = () => <div>Loading...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading
    ? <Loading />
    : <Component {...rest} />

const ButtonWithLoading = withLoading(Button)

export default ButtonWithLoading