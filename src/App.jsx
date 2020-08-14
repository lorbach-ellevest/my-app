import React from 'react'

import ListPage from 'components/ListPage'
import styles from 'App.module.css'

const App = props =>(
  <div className={styles.appMain}>
    <h2 className={styles.appTitle}>Simple List App</h2>
    <ListPage />
  </div>
)

export default App;
