import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../modals/Modal'

import ListHeader from './ListHeader/ListHeader'
import List from './List/List'
import ItemForm from './ItemForm/ItemForm'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import styles from './ListPage.module.css'

class ListPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			errors: {},
			activeItem: {
				id: '',
				title: '',
				description: ''
			},
		}
	}

	componentWillReceiveProps(nextProps) {
		let lastItem = nextProps.items[nextProps.items.length - 1];
		this.setState({
			editing: false,
			activeItem: {
				id: lastItem ? lastItem.id + 1 : 1,
				title: '',
				description: '' }
		});
	}

	handleChange = e => {
		e.preventDefault();
		let activeItem = Object.assign({}, this.state.activeItem, {[e.target.name]: e.target.value });
		this.setState({ activeItem });
	}

	handleClickEdit = item => {
		this.setState({ activeItem: item });
		this.handleToggleModal();
	}

	handleDelete = itemId => {
		this.props.actions.deleteItem(itemId);
	}

	handleSaveItem = e => {
		e.preventDefault();
		this.props.actions.saveItem(this.state.activeItem);
		this.handleToggleModal();
	}

	handleToggleModal = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal,
		}))
	}

	resetActiveItem= () => {
		this.setState({
			activeItem: {id: '', title: '', description: ''},
			errors: {},
			showModal: false
		});
	}

	render() {
		let { items, media } = this.props;

		return (
			<div className={styles.listPage}>
				{this.state.showModal &&
					<Modal>
						<ItemForm
							errors={this.state.errors}
							item={this.state.activeItem}
							onChange={this.handleChange}
							handleSaveItem={this.handleSaveItem}
							handleCloseModal={this.resetActiveItem} />
					</Modal>
				}
				<section className={styles.itemsSection}>
					<ListHeader handleClickNew={this.handleToggleModal} />
					{/* <ErrorBoundary> */}
						<List
							items={items}
							media={media}
							handleDelete={this.handleDelete}
							handleEditItem={this.handleClickEdit} />
						{/*  </ErrorBoundary> */}
				</section>
			</div>
		);
	}
}

ListPage.propTypes = {
	actions: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
	media: PropTypes.object.isRequired
};

export default ListPage
