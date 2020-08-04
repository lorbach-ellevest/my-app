import * as types from '../actions/actionTypes.js';

export default function itemReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_ITEMS_SUCCESS:
			return action.items;

		case types.ADD_ITEM_SUCCESS:

			return [
				...state,
				action.item,
			];

		case types.UPDATE_ITEM_SUCCESS:
			const { item } = action
			const newState = state.slice(0)
			const currentIndex = newState.findIndex(i => i.id === item.id)


			if (currentIndex >= 0) {
				newState.splice(currentIndex, 1, item)
				return newState
			} else return [...newState, item]

		case types.DELETE_ITEM_SUCCESS:
			return state.filter(item =>
					item.id !== action.itemId
			);

		default:
			return state;
	}
}
