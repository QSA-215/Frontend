import * as types from "./types";

const FirstHistory: types.History = {
	next: [],
	previous: [
		{
			size: {
				width: 600,
				height: 800
			},
			background: {
				backgroundType: 'color',
				color: '#FFFFFF'
			},
			filter: 'none',
			objects: []
		}
		]
};

const FirstCanvas: types.CanvasModel = {
			size: {
				width: 600,
				height: 800
			},
			background: {
				backgroundType: 'color',
				color: '#FFFFFF'
			},
			filter: 'none',
			objects: []
};

export {
	FirstHistory, FirstCanvas
};