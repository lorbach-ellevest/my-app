import React from 'react'

import ListPageContainer from 'components/ListPage'
import styles from 'App.module.css'

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
        <ListPageContainer media={this.state.media} />
      </div>
    )
  }

}
export default App;
