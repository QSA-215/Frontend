import {CanvasModel} from '../../../data/types'
import {CanvasActions} from './actions'

function createAddObjectAction(object: Object) {
	return {
		type: CanvasActions.ADD_OBJECT,
		payload: {
			object
		}
	}
}

function createChangeObjectPositionAction(objectId: number, newPosition: position) {
	return {
		type: CanvasActions.CHANGE_OBJECT_POSITION,
		payload: {
			objectId,
			newPosition,
		},
	}
}

function createChangeObjectSizeAction(objectId: number, newSize: size) {
	return {
		type: CanvasActions.CHANGE_OBJECT_SIZE,
		payload: {
			objectId,
			newSize,
		},
	}
}

function createChangeObjectColorAction(objectId: number, newColor: string) {
	return {
		type: CanvasActions.CHANGE_OBJECT_COLOR,
		payload: {
			objectId,
			newColor,
		},
	}
}

function createChangeObjectTextAction(objectId: number, newText: string) {
	return {
		type: CanvasActions.CHANGE_OBJECT_TEXT,
		payload: {
			objectId,
			newText,
		},
	}
}

function createApplyFilterAction(filterColor: string) {
	return {
		type: CanvasActions.APPLY_FILTER,
		payload: {
			filterColor,
		},
	}
}

function createDeleteObjectAction(objectId: number) {
	return {
		type: CanvasActions.DELETE_OBJECT,
		payload: {
			objectId,
		},
	}
}

function createClearAction() {
	return {
		type: CanvasActions.CLEAR,
	}
}

export {
	createAddObjectAction,
	createChangeObjectPositionAction,
	createChangeObjectSizeAction,
	createChangeObjectColorAction,
	createChangeObjectTextAction,
	createApplyFilterAction,
	createDeleteObjectAction,
	createClearAction,
}