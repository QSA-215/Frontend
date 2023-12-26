import * as types from "./types";

const ThirdHistory: types.History = {
	next: [],
	previous: [
		{
			size: {
				width: 700,
				height: 700
			},
			background: {
				backgroundType: 'img',
				url: '../images/flowers.png'
			},
			filter: 'none',
			objects: [
				{
					id: 1,
					position: {
						x: 300,
						y: 0 
					},
					type: {
						objectType: 'text',
						str: 'КОООТ',
						fontSize: 50,
						color: '#f0f0f0',
						bold: false,
						italic: true,
						underline: true
					},
					selectionFlag: false
				},
				{
					id: 2,
					position: {
						x: 150,
						y: 100
					},
					type: {
						objectType: 'img',
						url: '../images/cat.png',
						size: {
							width: 300,
							height: 200
						}
					},
					selectionFlag: false
				},
				{
					id: 3,
					position: {
						x: 200,
						y: 120 
					},
					type: {
						objectType: 'figure',
						type: 'circle',
						size: {
							width: 100,
							height: 100
						},
						color: '#ffffff'
					},
					selectionFlag: false
				},
				{
					id: 4,
					position: {
						x: 150,
						y: 100
					},
					type: {
						objectType: 'figure',
						type: 'rectangle',
						size: {
							width: 300,
							height: 200
						},
						color: "#ffff00"
					},
					selectionFlag: false
				},
				{
					id: 5,
					position: {
						x: 200,
						y: 200
					},
					type: {
						objectType: 'figure',
						type: 'triangle',
						size: {
							width: 100,
							height: 150
						},
						color: "#00ff00"
					},
					selectionFlag: false
				}
				]
		}
		]
};

const ThirdCanvas: types.CanvasModel = {
			size: {
				width: 700,
				height: 700
			},
			background: {
				backgroundType: 'img',
				url: '../images/flowers.png'
			},
			filter: 'none',
			objects: [
				{
					id: 1,
					position: {
						x: 300,
						y: 0 
					},
					type: {
						objectType: 'text',
						str: 'КОООТ',
						fontSize: 50,
						color: '#f0f0f0',
						bold: false,
						italic: true,
						underline: true
					},
					selectionFlag: false
				},
				{
					id: 2,
					position: {
						x: 150,
						y: 150
					},
					type: {
						objectType: 'img',
						url: '../images/cat.png',
						size: {
							width: 300,
							height: 200
						}
					},
					selectionFlag: false
				},
				{
					id: 3,
					position: {
						x: 200,
						y: 170 
					},
					type: {
						objectType: 'figure',
						type: 'circle',
						size: {
							width: 100,
							height: 100
						},
						color: '#ffffff'
					},
					selectionFlag: false
				},
				{
					id: 4,
					position: {
						x: 150,
						y: 150
					},
					type: {
						objectType: 'figure',
						type: 'rectangle',
						size: {
							width: 300,
							height: 200
						},
						color: "#ffff00"
					},
					selectionFlag: false
				},
				{
					id: 5,
					position: {
						x: 200,
						y: 50
					},
					type: {
						objectType: 'figure',
						type: 'triangle',
						size: {
							width: 100,
							height: 150
						},
						color: "#00ff00"
					},
					selectionFlag: false
				},
				{
					id: 6,
					position: {
						x: 0,
						y: 0 
					},
					type: {
						objectType: 'text',
						str: 'ПЁЁЁС',
						fontSize: 50,
						color: '#f0f0f0',
						bold: false,
						italic: true,
						underline: true
					},
					selectionFlag: false
				}
				]
};

export {
	ThirdHistory,
	ThirdCanvas
};