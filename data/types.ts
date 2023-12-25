type History = {
	next: Array<CanvasModel>,
	previous: Array<CanvasModel>
}

type CanvasModel = {
	size: Size,
	background: BackgroundImg | Color,
	filter: 'none' | 'gray' | 'red' | 'green' | 'blue',
	objects: Array<Object>
}

type Object = {
	id: number,
	position: Position,
	type: Text | Img | Figure,
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

type BackgroundImg = {
	backgroundType: 'img',
	url: string
}

type Img = {
	objectType: 'img',
	url: string,
	size: Size
}

type Figure = {
	objectType: 'figure',
	type: 'circle' | 'rectangle' | 'triangle',
	size: Size,
	color: string
}

type Position = {
	x: number,
	y: number
}

type Size = {
	width: number,
    height: number
}

type Color = {
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
	type Color
}