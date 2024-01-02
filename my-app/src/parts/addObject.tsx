import './addObject.css'
import {Object, CanvasModel} from '../../../data/types'
import {CSSProperties} from 'react'

type AddObjectProps = {
	object: Object,
	canvas: CanvasModel,
    setCanvas: (canvas: CanvasModel) => void,
}

const AddObject = (props: AddObjectProps) => {
	const {canvas, setCanvas} = props
	const {position, type, id, selectionFlag} = props.object

	function selectObject(id: number) {
		const newCanvas = {
      		...canvas,
    	};
    	const newObjects = canvas.objects;
    	var index;
    	for (index = 0; index < newObjects.length; ++index) {
    		if (newObjects[index].id == id) {
    			newObjects[index].selectionFlag = !newObjects[index].selectionFlag;
    		}
    		else {
    			newObjects[index].selectionFlag = false;
    		}
		}
    	newCanvas.objects = newObjects;
    	setCanvas(newCanvas)
	};

	const generalStyle: CSSProperties = {
		top: position.y + 'px',
		left: position.x + 'px'
	};

	let startX = 0;
	let startY = 0;

	const MouseDown = (event) => {
		startX = event.pageX
		startY = event.pageY
	}

	const DragEnd = (event) => {
		const newPosition = {
			x: position.x + event.pageX - startX,
			y: position.y + event.pageY - startY
		}
		const newCanvas = {
      		...canvas,
    	};
    	const newObjects = canvas.objects;
    	var index;
    	for (index = 0; index < newObjects.length; ++index) {
    		if (newObjects[index].id == id) {
    			newObjects[index].position = newPosition
    		}
		}
    	newCanvas.objects = newObjects;
    	setCanvas(newCanvas)
	}

	if (type.objectType == 'text') {
		const textStyle = {
			color: type.color,
			fontSize: type.fontSize + 'px',
			fontWeight: (type.bold == true) ? 'bold' : undefined,
			fontStyle: (type.italic == true) ? 'italic' : undefined,
			textDecoration: (type.underline == true) ? 'underline' : undefined,
		};

		return (
			<p draggable onDragEnd={DragEnd} onMouseDown={MouseDown} onClick={() => selectObject(id)} className={`text ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...textStyle}}>{type.str}</p>
		)
	}


	if (type.objectType == 'img') {
		const imageStyle = {
			width: type.size.width + 'px',
			height: type.size.height + 'px',
		};
		return (
			<img draggable onDragEnd={DragEnd} onMouseDown={MouseDown} src={type.url} onClick={() => selectObject(id)} className={`image ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...imageStyle}} />
		)
	}


	if (type.objectType == 'figure') {
		const figureStyle: CSSProperties = {
			top: position.y - 5 + 'px',
			left: position.x - 5 + 'px',
      		width: type.size.width + 10,
      		height: type.size.height + 10
		};

		if (type.type == 'circle') {
			return (
				<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
      				<circle onClick={() => selectObject(id)} r={type.size.width/2} cx={(type.size.width/2) + 5} cy={(type.size.width/2) + 5} stroke={type.color} fillOpacity="0" strokeWidth="3"/>
    			</svg>
			)
		}

		if (type.type == 'rectangle') {
			return (
				<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
      				<rect onClick={() => selectObject(id)} width={type.size.width} height={type.size.height} x={5} y={5} stroke={type.color} fillOpacity="0" strokeWidth="3"/>
    			</svg>
			)
		}

		if (type.type == 'triangle') {
  			const points = `0, ${type.size.height}  ${type.size.width}, ${type.size.height}  ${type.size.width/2}, 0`
			return (
				<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
      				<polygon onClick={() => selectObject(id)} points={points} transform='translate(5 5)' stroke={type.color} fillOpacity="0" strokeWidth="3"/>
    			</svg>
			)
		}
	}
}

type AddFilterProps = {
	filterColor: string,
	filterWidth: number,
	filterHeight: number
}

const AddFilter = (props: AddFilterProps) => {
	const {filterColor, filterWidth, filterHeight} = props

	const filterStyle: CSSProperties = {
		width: filterWidth,
        height: filterHeight
	};
	if (filterColor == "gray") {return (<div className="grayFilter filter" style={filterStyle}></div>)}
	if (filterColor == "red") {return (<div className="redFilter filter" style={filterStyle}></div>)}
	if (filterColor == "green") {return (<div className="greenFilter filter" style={filterStyle}></div>)}
	if (filterColor == "blue") {return (<div className="blueFilter filter" style={filterStyle}></div>)}
}

export {
	AddObject,
	AddFilter
}
