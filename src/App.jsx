import React from 'react'

import ListPage from 'components/ListPage'
import styles from 'App.module.css'

/**
  NF: ErrorBoundary (ErrorBoundary/ListPage)
  NF: Portals ()
  PureComponent  / React.memo()

  X getDerivedStateFromProps() / getSnapshotBeforeUpdate()
  X Fragment + return strings / numbers / arrays
  X Hooks

  Lazy/Suspense
  Context




  >> CustomHooks

  >> StrictMode Component: Highlights problemaitc areas. If you see warnings in strict mode those
    things will likely cause bugs for async rendering.

  >> refs:
    previously:
      1) Srtring refs ( ref="myRef") easy but bugy
      2) Callback ref (ref={el=> ( this.myRef = el )}) // more complex but flexible -> they are still supported
    NEW: createRef:
      declare it on constructor: this.inputRef = React.createRef()
      set it in a component: ref={this.inputRef}
      use it in a method:  this.inputRef.current.focus()

  >> forwarding refs: Ref forwarding is a new opt-in feature that lets some components take a ref they receive,
    and pass it further down (in other words, “forward” it) to a child.
    create ref and pass it as a prop <MyComponent ref={ref} />
    const MyComponent = React.forwardRef((props, ref) => <button ref={ref} />

  >> Pointer Events support

  >> RoadMap:
    ConcurrentMode: Concurrent Mode is a set of new features that help React apps stay responsive and
    gracefully adjust to the user’s device capabilities and network speed.
    React can work on several state updates concurrently
**/
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      media: {
        mobile: false,
        landscape: true
      }
    }
  }

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  }

  handleWindowResize = () => {
    this.setState({media: {
      mobile:
        window.matchMedia(`(max-device-width: 767px)`).matches ||
        window.matchMedia(`(max-width: 767px)`).matches,
      landscape: window.matchMedia(`(orientation: landscape)`).matches
    }})
  }

  render() {
    return (
      <div className={styles.appMain}>
        <h2 className={styles.appTitle}>Simple List App</h2>
        <ListPage media={this.state.media} />
      </div>
    )
  }

}
export default App;
