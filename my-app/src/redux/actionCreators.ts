import {CanvasModel, Object, Position, Size, BackgroundImg, BackgroundColor} from '../../../data/types'
import {CanvasActions} from './actions'

function createSetCanvasAction(canvas: CanvasModel) {
	return {
		type: CanvasActions.SET_CANVAS,
		payload: {
			canvas,
		}
	}
}

function createChangeCanvasSizeAction(newSize: Size) {
	return {
		type: CanvasActions.CHANGE_CANVAS_SIZE,
		payload: {
			newSize,
		}
	}
}

function createChangeCanvasBackgroundAction(newBackground: BackgroundImg | BackgroundColor) {
	return {
		type: CanvasActions.CHANGE_CANVAS_BACKGROUND,
		payload: {
			newBackground,
		}
	}
}

function createAddObjectAction(object: Object) {
	return {
		type: CanvasActions.ADD_OBJECT,
		payload: {
			object,
		}
	}
}

function createSelectObjectAction(objectId: number) {
	return {
		type: CanvasActions.SELECT_OBJECT,
		payload: {
			objectId,
		}
	}
}

function createChangeObjectPositionAction(objectId: number, newPosition: Position) {
	return {
		type: CanvasActions.CHANGE_OBJECT_POSITION,
		payload: {
			objectId,
			newPosition,
		},
	}
}

function createChangeObjectSizeAction(objectId: number, newSize: Size) {
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

function createChangeObjectTextAction(objectId: number, newText: string, newFontSize: number) {
	return {
		type: CanvasActions.CHANGE_OBJECT_TEXT,
		payload: {
			objectId,
			newText,
			newFontSize,
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
	createSetCanvasAction,
	createChangeCanvasSizeAction,
	createChangeCanvasBackgroundAction,
	createAddObjectAction,
	createSelectObjectAction,
	createChangeObjectPositionAction,
	createChangeObjectSizeAction,
	createChangeObjectColorAction,
	createChangeObjectTextAction,
	createApplyFilterAction,
	createDeleteObjectAction,
	createClearAction,
}