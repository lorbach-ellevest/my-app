import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../../actions/itemActions.js';

import ItemForm from './ItemForm'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(itemActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
