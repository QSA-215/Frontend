type History = {
	next: Array<CanvasModel>,
	previous: Array<CanvasModel>
}

type CanvasModel = {
	size: Size,
	background: BackgroundImg | BackgroundColor,
	filter: 'none' | 'gray' | 'red' | 'green' | 'blue',
	objects: Array<Object>
}

type Object = {
	id: number,
	position: Position,
	type: Text | Figure | Img,
	selectionFlag: boolean
}

type Text = {
	objectType: 'text',
	str: string,
	fontSize: number,
	color: string,
	bold: boolean,
	italic: boolean,
	underline: boolean
}

type Figure = {
	objectType: 'figure',
	type: 'circle' | 'rectangle' | 'triangle',
	size: Size,
	color: string
}

type Img = {
	objectType: 'img',
	url: string,
	size: Size
}

type BackgroundImg = {
	backgroundType: 'img',
	url: string
}

type Position = {
	x: number,
	y: number
}

type Size = {
	width: number,
    height: number
}

type BackgroundColor = {
	backgroundType: 'color',
	color: string
}

export {
	type History, 
	type CanvasModel, 
	type Object, 
	type Text, 
	type BackgroundImg, 
	type Img, 
	type Figure, 
	type Position, 
	type Size, 
	type BackgroundColor
}