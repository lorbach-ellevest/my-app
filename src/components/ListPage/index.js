import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../../actions/itemActions.js';


import ListPage from './ListPage'
// Portals demo
// import ListPage from './ListPageAfterPortals'

const mapStateToProps = state => ({
	items: state.items
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(itemActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
