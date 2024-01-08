import * as types from "./types";

const ThirdCanvas: types.CanvasModel = {
			size: {
				width: 700,
				height: 700
			},
			background: {
				backgroundType: 'img',
				url: '../images/flowers.png'
			},
			filter: 'red',
			objects: [
				{
					id: 1,
					position: {
						x: 180,
						y: 150
					},
					type: {
						objectType: 'img',
						url: '../images/cat.png',
						size: {
							width: 400,
							height: 250
						}
					},
					selectionFlag: false
				},
				{
					id: 2,
					position: {
						x: 180,
						y: 150
					},
					type: {
						objectType: 'figure',
						type: 'rectangle',
						size: {
							width: 400,
							height: 250
						},
						color: "#ffff00"
					},
					selectionFlag: false
				},
				{
					id: 3,
					position: {
						x: 235,
						y: 170 
					},
					type: {
						objectType: 'figure',
						type: 'circle',
						size: {
							width: 140,
							height: 140
						},
						color: '#ffffff'
					},
					selectionFlag: false
				},
				{
					id: 4,
					position: {
						x: 217,
						y: 90
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
					id: 5,
					position: {
						x: 235,
						y: 50
					},
					type: {
						objectType: 'figure',
						type: 'triangle',
						size: {
							width: 140,
							height: 200
						},
						color: "#00ff00"
					},
					selectionFlag: false
				},
				{
					id: 6,
					position: {
						x: 400,
						y: 165 
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
	ThirdCanvas
};