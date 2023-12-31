import * as types from "./types";

const Sample3: types.CanvasModel = {
	size: {
		width: 600,
		height: 800
	},
	background: {
		backgroundType: 'img',
		url: "../images/newYear.jpg"
	},
	filter: 'none',
	objects: [
		{id:1,position:{x:100,y:100},type:{objectType:"text",str:"Happy New Year !!!",fontSize:50,color:"#ff00dd",bold:false,italic:false,underline:false},selectionFlag:false},
		{id:2,position:{x:15,y:450},type:{objectType:"img",url:"../images/111.png",size:{width:190,height:250}},selectionFlag:false},
		{id:3,position:{x:390,y:490},type:{objectType:"img",url:"../images/222.png",size:{width:190,height:170}},selectionFlag:false},
		{id:4,position:{x:90,y:100},type:{objectType:"figure",type:"rectangle",size:{width:420,height:65},color:"#00ff6e"},selectionFlag:false},
		{id:5,position:{x:15,y:450},type:{objectType:"figure",type:"rectangle",size:{width:190,height:250},color:"#ffae00"},selectionFlag:false},
		{id:6,position:{x:400,y:490},type:{objectType:"figure",type:"circle",size:{width:170,height:170},color:"#002aff"},selectionFlag:false}
		]
};

const Sample2: types.CanvasModel = {
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
						y: 15 
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
						x: 15,
						y: 15 
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

const Sample1: types.CanvasModel = {
			size: {
				width: 700,
				height: 700
			},
			background: {
				backgroundType: 'color',
				color: '#FFFFFF'
			},
			filter: 'none',
			objects: []
};

export {
	Sample3, Sample2, Sample1
};