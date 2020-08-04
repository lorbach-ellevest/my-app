import React from 'react'
import PropTypes from 'prop-types'

import CounterBadge from 'components/CounterBadge/CounterBadge'
import CounterPortal from 'components/CounterBadge/CounterPortal'
// import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import Form from 'components/Form'
import Modal from 'components/modals/ModalPortal'

import ListHeader from './ListHeader/ListHeader'
// import ListHeader from './ListHeader/ListHeaderWithPortal'
import List from './List/List'

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

	UNSAFE__componentWillReceiveProps(nextProps) {
		this.setState(() => ({
			editing: false,
			activeItem: null,
		}))
	}

	handleToggleModal = item => {
		this.setState((prevState) => ({
			activeItem: item,
			showModal: !prevState.showModal,
		}))
	}

	render() {
		let { actions: { deleteItem }, items, media } = this.props;

		return (
			<div id="listPage" className={styles.listPage}>
				{this.state.showModal &&
					<Modal>
						<Form item={this.state.activeItem} handleCloseModal={this.handleToggleModal} />
					</Modal>
				}
				<section className={styles.itemsSection}>
					<ListHeader handleClickNew={this.handleToggleModal} />
					{/* <ErrorBoundary> */}
						<List items={items} media={media} handleDelete={deleteItem} />
					{/*  </ErrorBoundary> */}

					{/* Portals
						<CounterPortal>
						<CounterBadge count={items.length} />
					</CounterPortal>
					*/}
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

/**
const ListPage = ({ actions: { deleteItem }, items, media }) => (
	<div id="listPage" className={styles.listPage}>
		<section className={styles.itemsSection}>
			<ListHeader />
			<ErrorBoundary>
				<List
					items={items}
					media={media}
					handleDelete={deleteItem}
				/>
			</ErrorBoundary>

			<CounterPortal>
				<CounterBadge count={items.length} />
			</CounterPortal>
		</section>
	</div>
)
**/
