import './addObject.css'
import {Object, CanvasModel} from '../../../data/types'
import {CSSProperties} from 'react'

type AddObjectProps = {
	object: Object,
	canvas: CanvasModel,
    setCanvas: (canvas: CanvasModel) => void,
    setOpenForm: (isOpenForm: number) => void,
}

const AddObject = (props: AddObjectProps) => {
	const {canvas, setCanvas, setOpenForm} = props
	const {position, type, id, selectionFlag} = props.object

	function selectObject(id: number) {
		const newCanvas = {
      		...canvas,
    	};
    	const newObjects = canvas.objects;
    	var index, objectIndex;
    	for (index = 0; index < newObjects.length; ++index) {
    		if (newObjects[index].id == id) {
    			objectIndex = index;
    			newObjects[index].selectionFlag = !newObjects[index].selectionFlag;
    			if (newObjects[index].type.objectType == 'text') {
    				setOpenForm(1)
    			}
    			else if (newObjects[index].type.objectType == 'figure') {
    				setOpenForm(2)
    			}
    			else if (newObjects[index].type.objectType == 'img') {
    				setOpenForm(3)
    			}
    		}
    		else {
    			newObjects[index].selectionFlag = false;
    		}
		}
		//newObjects.splice(objectIndex, 1);
    	newCanvas.objects = newObjects;
    	setCanvas(newCanvas)
	};

	const generalStyle: CSSProperties = {
		top: position.y + 'px',
		left: position.x + 'px'
	};

	if (type.objectType == 'text') {
		const textStyle = {
			color: type.color,
			fontSize: type.fontSize + 'px',
			fontWeight: (type.bold == true) ? 'bold' : undefined,
			fontStyle: (type.italic == true) ? 'italic' : undefined,
			textDecoration: (type.underline == true) ? 'underline' : undefined,
		};
		return (
			<div>
				<p onClick={() => selectObject(id)} className={`text ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...textStyle}}>{type.str}</p>
			</div>
		)
	}


	if (type.objectType == 'img') {
		const imageStyle = {
			width: type.size.width + 'px',
			height: type.size.height + 'px',
			backgroundImage: 'url(' + type.url + ')',
			backgroundSize: 'cover'
		};
		return (
			<div onClick={() => selectObject(id)} className={`image ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...imageStyle}}></div>
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

	if (filterColor == "gray") {
		return (
			<div className="grayFilter filter" style={filterStyle}></div>
		)
	}

	if (filterColor == "red") {
		return (
			<div className="redFilter filter" style={filterStyle}></div>
		)
	}

	if (filterColor == "green") {
		return (
			<div className="greenFilter filter" style={filterStyle}></div>
		)
	}

	if (filterColor == "blue") {
		return (
			<div className="blueFilter filter" style={filterStyle}></div>
		)
	}
}

export {
	AddObject,
	AddFilter
}
