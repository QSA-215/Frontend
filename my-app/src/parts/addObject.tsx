import './addObject.css'
import {Object} from '../../../data/types'
import {CSSProperties} from 'react'
import {useAppSelector, useAppActions} from '../redux/hooks'

type AddObjectProps = {
	object: Object,
}

const AddObject = (props: AddObjectProps) => {
	const {position, type, id, selectionFlag} = props.object
    const {createSelectObjectAction} = useAppActions()

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
		return (<p onClick={() => createSelectObjectAction(id)} className={`text ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...textStyle}}>{type.str}</p>)
	}


	if (type.objectType == 'img') {
		const imageStyle = {
			width: type.size.width + 'px',
			height: type.size.height + 'px',
			backgroundImage: 'url(' + type.url + ')',
			backgroundSize: 'cover'
		};
		return (<div onClick={() => createSelectObjectAction(id)} className={`image ${selectionFlag ? 'focus' : ''}`} style={{...generalStyle, ...imageStyle}}></div>)
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
      				<circle onClick={() => createSelectObjectAction(id)} r={type.size.width/2} cx={(type.size.width/2) + 5} cy={(type.size.width/2) + 5} stroke={type.color} fillOpacity="0" strokeWidth="3"/>
    			</svg>
			)
		}

		if (type.type == 'rectangle') {
			return (
				<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
      				<rect onClick={() => createSelectObjectAction(id)} width={type.size.width} height={type.size.height} x={5} y={5} stroke={type.color} fillOpacity="0" strokeWidth="3"/>
    			</svg>
			)
		}

		if (type.type == 'triangle') {
  			const points = `0, ${type.size.height}  ${type.size.width}, ${type.size.height}  ${type.size.width/2}, 0`
			return (
				<svg className={`svg ${selectionFlag ? 'focus' : ''}`} style={figureStyle}>
      				<polygon onClick={() => createSelectObjectAction(id)} points={points} transform='translate(5 5)' stroke={type.color} fillOpacity="0" strokeWidth="3"/>
    			</svg>
			)
		}
	}
}

const AddFilter = () => {
  	const canvas = useAppSelector(state => state.canvas)
	const filterStyle: CSSProperties = {
		width: canvas.size.width,
        height: canvas.size.height
	};
	if (canvas.filter == "gray") {return (<div className="grayFilter filter" style={filterStyle}></div>)}
	if (canvas.filter == "red") {return (<div className="redFilter filter" style={filterStyle}></div>)}
	if (canvas.filter == "green") {return (<div className="greenFilter filter" style={filterStyle}></div>)}
	if (canvas.filter == "blue") {return (<div className="blueFilter filter" style={filterStyle}></div>)}
}

export {
	AddObject,
	AddFilter
}
