import {CanvasModel, Object, Position, Size, BackgroundImg, BackgroundColor} from '../../../data/types'

enum CanvasActions {
	SET_CANVAS = 'SET_CANVAS',
	CHANGE_CANVAS_SIZE = 'CHANGE_CANVAS_SIZE',
	CHANGE_CANVAS_BACKGROUND = 'CHANGE_CANVAS_BACKGROUND',
	ADD_OBJECT = 'ADD_OBJECT',
	SELECT_OBJECT = 'SELECT_OBJECT',
	CHANGE_OBJECT_POSITION = 'CHANGE_OBJECT_POSITION',
	CHANGE_OBJECT_SIZE = 'CHANGE_OBJECT_SIZE',
	CHANGE_OBJECT_COLOR = 'CHANGE_OBJECT_COLOR',
	CHANGE_OBJECT_TEXT = 'CHANGE_OBJECT_TEXT',
	DELETE_OBJECT = 'DELETE_OBJECT',
	APPLY_FILTER = 'APPLY_FILTER',
	CLEAR = 'CLEAR',
}

type SetCanvasAction = {
	type: CanvasActions.SET_CANVAS,
	payload: {
		canvas: CanvasModel,
	}
}

type ChangeCanvasSizeAction = {
	type: CanvasActions.CHANGE_CANVAS_SIZE,
	payload: {
		newSize: Size,
	}
}

type ChangeCanvasBackgroundAction = {
	type: CanvasActions.CHANGE_CANVAS_BACKGROUND,
	payload: {
		newBackground: BackgroundImg | BackgroundColor,
	}
}

type AddObjectAction = {
	type: CanvasActions.ADD_OBJECT,
	payload: {
		object: Object,
	}
}

type SelectObjectAction = {
	type: CanvasActions.SELECT_OBJECT,
	payload: {
		objectId: number,
	}
}
type ChangeObjectPositionAction = {
	type: CanvasActions.CHANGE_OBJECT_POSITION,
	payload: {
		objectId: number,
		newPosition: Position,
	},
}

type ChangeObjectSizeAction = {
	type: CanvasActions.CHANGE_OBJECT_SIZE,
	payload: {
		objectId: number,
		newSize: Size,
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
		newFontSize: number,
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

type Action = SetCanvasAction | ChangeCanvasSizeAction | ChangeCanvasBackgroundAction | AddObjectAction | SelectObjectAction | ChangeObjectPositionAction | ChangeObjectSizeAction | ChangeObjectColorAction | ChangeObjectTextAction | DeleteObjectAction | ApplyFilterAction | ClearAction

export {
	CanvasActions,
	type Action,
}