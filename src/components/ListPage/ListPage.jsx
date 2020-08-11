import React from 'react'
import PropTypes from 'prop-types'

import CounterBadge from 'components/CounterBadge/CounterBadge'
import CounterPortal from 'components/CounterBadge/CounterPortal'

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

import ListHeader from './ListHeader/ListHeader'
import List from './List/List'

import styles from './ListPage.module.css'

const ListPage = ({ actions: { deleteItem }, items, media }) => (
	<div id="listPage" className={styles.listPage}>
		<section className={styles.itemsSection}>
			<ListHeader />
			<ErrorBoundary>
				<List items={items} media={media} handleDelete={deleteItem} />
			<CounterPortal>
				<CounterBadge count={items.length} />
			</CounterPortal>
			</ErrorBoundary>
		</section>
	</div>
)


ListPage.propTypes = {
	actions: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
	media: PropTypes.object.isRequired
};

export default ListPage
