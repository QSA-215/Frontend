import './addObject.css'
import {Object} from '../../../data/types'
import {CSSProperties} from 'react'
import {useAppSelector, useAppActions} from '../redux/hooks'

type AddObjectProps = {
	object: Object,
}

const AddObject = (props: AddObjectProps) => {
	const {position, type, id, selectionFlag} = props.object
    const {createSelectObjectAction, createChangeObjectPositionAction} = useAppActions()

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
			x: Number(position.x + event.pageX - startX),
			y: Number(position.y + event.pageY - startY)
		}
		createChangeObjectPositionAction(id, newPosition)
	}

	if (type.objectType == 'text') {
		const textStyle = {
			color: type.color,
			fontSize: type.fontSize + 'px',
			fontWeight: (type.bold == true) ? 'bold' : undefined,
			fontStyle: (type.italic == true) ? 'italic' : undefined,
			textDecoration: (type.underline == true) ? 'underline' : undefined,
		};
		return (<p draggable onDragEnd={DragEnd} onMouseDown={MouseDown} onClick={() => createSelectObjectAction(id)} className={`text ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...textStyle}}>{type.str}</p>)
	}


	if (type.objectType == 'img') {
		const imageStyle = {
			width: type.size.width + 'px',
			height: type.size.height + 'px',
		};
		return (<img src={type.url} draggable onDragEnd={DragEnd} onMouseDown={MouseDown} onClick={() => createSelectObjectAction(id)} className={`image ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...imageStyle}} />)
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
				<div draggable onDragEnd={DragEnd} onMouseDown={MouseDown}>
					<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
	      				<circle onClick={() => createSelectObjectAction(id)} r={type.size.width/2} cx={(type.size.width/2) + 5} cy={(type.size.width/2) + 5} stroke={type.color} fillOpacity="0" strokeWidth="3"/>
	    			</svg>
    			</div>
			)
		}

		if (type.type == 'rectangle') {
			return (
				<div draggable onDragEnd={DragEnd} onMouseDown={MouseDown}>
					<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
	      				<rect onClick={() => createSelectObjectAction(id)} width={type.size.width} height={type.size.height} x={5} y={5} stroke={type.color} fillOpacity="0" strokeWidth="3"/>
	    			</svg>
    			</div>
			)
		}

		if (type.type == 'triangle') {
  			const points = `0, ${type.size.height}  ${type.size.width}, ${type.size.height}  ${type.size.width/2}, 0`
			return (
				<div draggable onDragEnd={DragEnd} onMouseDown={MouseDown}>
					<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
	      				<polygon onClick={() => createSelectObjectAction(id)} points={points} transform='translate(5 5)' stroke={type.color} fillOpacity="0" strokeWidth="3"/>
	    			</svg>
    			</div>
			)
		}
	}
}

export {
	AddObject,
}
