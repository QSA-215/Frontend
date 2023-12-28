import {CanvasModel} from '../../../data/types'

enum CanvasActions {
	ADD_OBJECT = 'ADD_OBJECT',
	CHANGE_OBJECT_POSITION = 'CHANGE_OBJECT_POSITION',
	CHANGE_OBJECT_SIZE = 'CHANGE_OBJECT_SIZE',
	CHANGE_OBJECT_COLOR = 'CHANGE_OBJECT_COLOR',
	CHANGE_OBJECT_TEXT = 'CHANGE_OBJECT_TEXT',
	DELETE_OBJECT = 'DELETE_OBJECT',
	APPLY_FILTER = 'APPLY_FILTER',
	CLEAR = 'CLEAR',
}

type AddObjectAction = {
	type: CanvasActions.ADD_OBJECT,
	payload: {
		object: Object
	}
}

type ChangeObjectPositionAction = {
	type: CanvasActions.CHANGE_OBJECT_POSITION,
	payload: {
		objectId: number,
		newPosition: position,
	},
}

type ChangeObjectSizeAction = {
	type: CanvasActions.CHANGE_OBJECT_SIZE,
	payload: {
		objectId: number,
		newSize: size,
	},
}

type ChangeObjectColorAction = {
	type: CanvasActions.CHANGE_OBJECT_COLOR,
	payload: {
		objectId: number,
		newColor: string,
	},
}

type ChangeObjectTextAction = {
	type: CanvasActions.CHANGE_OBJECT_TEXT,
	payload: {
		objectId: number,
		newText: string,
	},
}

type DeleteObjectAction = {
	type: CanvasActions.DELETE_OBJECT,
	payload: {
		objectId: number,
	},
}

type ApplyFilterAction = {
	type: CanvasActions.APPLY_FILTER,
	payload: {
		filterColor: string,
	},
}

type ClearAction = {
	type: CanvasActions.CLEAR,
}

type Action = AddObjectAction | ChangeObjectPositionAction | ChangeObjectSizeAction | ChangeObjectColorAction | ChangeObjectTextAction | DeleteObjectAction | ApplyFilterAction | ClearAction

export {
	CanvasActions,
	type Action,
}