import {combineReducers} from 'redux'
import {Action, CanvasActions} from './actions'
import {CanvasModel} from '../../../data/types'
import {ThirdCanvas} from '../../../data/data3'

const initData: CanvasModel = ThirdCanvas

const canvasReducer = (state: CanvasModel = initData, action: Action) => {
	switch (action.type) {

	case CanvasActions.SET_CANVAS: {
		console.log('set canvas')
		const newState = action.payload.canvas
		return {
			...newState,
		}
	}

	case CanvasActions.CHANGE_CANVAS_SIZE: {
		console.log('change canvas size')
		const newState = state
		return {
			...newState,
			size: action.payload.newSize
		}
	}

	case CanvasActions.CHANGE_CANVAS_BACKGROUND: {
		console.log('change canvas background')
		const newState = state
		return {
			...newState,
			background: action.payload.newBackground
		}
	}

	case CanvasActions.ADD_OBJECT: {
		console.log('add object')
		const newState = state
		const newObjects = [
			...newState.objects,
			action.payload.object
		]
		return {
			...newState,
			objects: newObjects
		}
	}

	case CanvasActions.SELECT_OBJECT: {
		console.log('select object')
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId) {
				object.selectionFlag = !object.selectionFlag
			}
			else {
				object.selectionFlag = false
			}
			return object
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_FIGURE_TYPE: {
		console.log('change figure type')
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId && object.type.objectType === 'figure') {
				object.type.type = action.payload.newFigureType
			}
			return object
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_TEXT_DECORATION: {
		console.log('change text decoration')
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId && object.type.objectType === 'text') {
				object.type.bold = action.payload.newBold
				object.type.italic = action.payload.newItalic
				object.type.underline = action.payload.newUnderline
			}
			return object
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_OBJECT_POSITION: {
		console.log('change position')
		const newState = state
		const newObjects = newState.objects.map(object => {
			if (object.id === action.payload.objectId) {
				object.position = action.payload.newPosition
			}
			return object
		})
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.CHANGE_OBJECT_SIZE: {
		console.log('change size')
		const newState = state
		const newObjects = newState.objects.map(object => {
			const newType = object.type
			if (object.id === action.payload.objectId && (newType.objectType === 'img' || newType.objectType === 'figure')) {
				newType.size = action.payload.newSize
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
		console.log('change color')
		const newState = state
		const newObjects = newState.objects.map(object => {
			const newType = object.type
			if (object.id === action.payload.objectId && (newType.objectType === 'text' || newType.objectType === 'figure')) {
				newType.color = action.payload.newColor
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
		console.log('change text')
		const newState = state
		const newObjects = newState.objects.map(object => {
			const newType = object.type
			if (object.id === action.payload.objectId && newType.objectType === 'text') {
				newType.str = action.payload.newText;
				newType.fontSize = action.payload.newFontSize;
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
		console.log('delete object')
		const newState = state
		const newObjects = newState.objects.filter(object => object.id !== action.payload.objectId)
		return {
			...newState,
			objects: newObjects,
		}
	}

	case CanvasActions.APPLY_FILTER: {
		console.log('apply filter')
		const newState = state
		return {
			...newState,
			filter: action.payload.filterColor
		}
	}

	case CanvasActions.CLEAR: {
		console.log('clear')
		const newState = state
		return {
			...newState,
			objects: [],
			filter: 'none',
			background: {
				backgroundType: 'color',
	      		color: '#FFFFFF',
			}
		}
	}

	default:
		console.log('default')
		return state
	}
}

const rootReducer = combineReducers({
	canvas: canvasReducer
})

export {
	rootReducer,
}