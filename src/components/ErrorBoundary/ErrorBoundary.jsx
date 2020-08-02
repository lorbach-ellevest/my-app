import React from 'react'
/* 
 * ErrorBoundary are React components that catch JS errors in their child component tree, log them and display a UI
 * Error Boundaries caught errors during the render  & the lifecylce method
 * They do not catch errors on event handlers!
 * Component must include at least one method of getDerivedStateFromError  or componentDidCatch
 *
*/
class ErrorBoundary extends React.Component {
  constructor(props) { console.log('ErrorBoundary');
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Trigger analytics');
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '600px',  }}>
          <h1 >ʕ•́ᴥ•̀ʔっ Something went wrong!</h1>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary
