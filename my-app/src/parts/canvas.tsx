import './canvas.css'
import {CanvasModel} from '../../../data/types'
import {AddObject, AddFilter} from './addObject'

type ViewCanvasProps = {
    canvas: CanvasModel,
    setCanvas: (canvas: CanvasModel) => void,
}

const ViewCanvas = (props: ViewCanvasProps) => {
    const {canvas, setCanvas} = props
    const {size, background, filter} = canvas

    const canvasSizeStyle = {
        width: size.width,
        height: size.height
    };

    let canvasBackgroundStyle = {};
    if (background.backgroundType == 'img') {
        canvasBackgroundStyle = {
            backgroundImage: 'url(' + background.url + ')',
            backgroundSize: 'cover'
        };
    }
    if (background.backgroundType == 'color') {
        canvasBackgroundStyle = {
            background: background.color
        };
    }
    return (
        <div className="canvas" style={{...canvasSizeStyle, ...canvasBackgroundStyle}}>
            {canvas.objects.map(object => <AddObject key={object.id} object={object} canvas={canvas}></AddObject>)}
            <AddFilter filterColor={filter} filterWidth={size.width} filterHeight={size.height}></AddFilter>
        </div>
    )
}

export {ViewCanvas};