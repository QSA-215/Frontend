import * as types from "./types";

const SecondHistory: types.History = {
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
			filter: 'gray',
			objects: [
				{
					id: 1,
					position: {
						x: 5,
						y: 5 
					},
					type: {
						objectType: 'text',
						str: 'This is a text area',
						fontSize: 14,
						color: '#000000',
						bold: false,
						italic: false,
						underline: false
					},
					selectionFlag: false
				},
				{
					id: 2,
					position: {
						x: 100,
						y: 100 
					},
					type: {
						objectType: 'figure',
						type: 'circle',
						size: {
							width: 50,
							height: 50
						},
						color: '#000000'
					},
					selectionFlag: false
				}
				]
		}
		]
};

const SecondCanvas: types.CanvasModel = {
			size: {
				width: 600,
				height: 800
			},
			background: {
				backgroundType: 'color',
				color: '#FFFFFF'
			},
			filter: 'gray',
			objects: [
				{
					id: 1,
					position: {
						x: 5,
						y: 5 
					},
					type: {
						objectType: 'text',
						str: 'This is a text area',
						fontSize: 50,
						color: '#000000',
						bold: false,
						italic: false,
						underline: false
					},
					selectionFlag: false
				},
				{
					id: 2,
					position: {
						x: 100,
						y: 100 
					},
					type: {
						objectType: 'figure',
						type: 'circle',
						size: {
							width: 50,
							height: 50
						},
						color: '#000000'
					},
					selectionFlag: false
				}
				]
};

export {
	SecondHistory, SecondCanvas
};