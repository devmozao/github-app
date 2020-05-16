import React, { Component, memo } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    if (error) {
      return { hasError: true }
    }
  }

  componentDidCatch (error, errorInfo) {
    console.log('Something went wrong.', error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>
    }

    return this.props.children
  }
}

export default memo(ErrorBoundary)
