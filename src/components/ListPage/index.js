import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../../actions/itemActions.js';


import ListPage from './ListPage'
// counter Portals
// import ListPage from './ListPageCounter'

const mapStateToProps = state => ({
	items: state.items
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(itemActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
