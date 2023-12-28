import {combineReducers} from 'redux'
import {Action, CanvasActions} from './actions'
import {CanvasModel} from '../../../data/types'
import {ThirdCanvas} from '../../../data/data3'

const initData: Canvas[] = ThirdCanvas

const canvasReducer = (state: Canvas[] = initData, action: Action) => {
	switch (action.type) {

	case CanvasActions.ADD_OBJECT: {
		const newState = state
		const newObjects = [
			...newState.objects,
			action.payload,
		]
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_OBJECT_POSITION: {
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId) {
				return {
					...object,
					position: action.payload.newPosition,
				}
			}
			return object
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_OBJECT_SIZE: {
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId) {
				const newType = object.type
				return {
					...type,
					size: action.payload.newSize,
				}
			}
			return {
				...object,
				type: newType,
			}
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_OBJECT_COLOR: {
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId) {
				const newType = object.type
				return {
					...type,
					color: action.payload.newColor,
				}
			}
			return {
				...object,
				type: newType,
			}
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_OBJECT_TEXT: {
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId) {
				const newType = object.type
				return {
					...type,
					str: action.payload.newText,
				}
			}
			return {
				...object,
				type: newType,
			}
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.DELETE_OBJECT: {
		const newState = state
		const newObjects = newState.objects.filter(object => object.id !== action.payload.objectId)
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.APPLY_FILTER: {
		const newState = state
		return {
			...newState,
			filter: action.payload.filterColor,
		}
	}

	case CanvasActions.CLEAR: {
		const newState = state
		return {
			...newState,
			objects: [],
		}
	}

	default:
		return state
	}
}

const rootReducer = combineReducers({
	canvas: canvasReducer
})

export {
	rootReducer,
}