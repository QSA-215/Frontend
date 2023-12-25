import './canvas.css'
import {useState, useRef} from 'react'
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

    // GENERAL
    const [isOpenForm, setOpenForm] = useState(0);
    const [isOpenTextForm, setOpenTextForm] = useState(false);
    const [isOpenFigureForm, setOpenFigureForm] = useState(false);
    const [isOpenImageForm, setOpenImageForm] = useState(false);

    if (isOpenForm == 1) {
        setOpenTextForm(true)
    }
    else if (isOpenForm == 2) {
        setOpenFigureForm(true)
    }
    else if (setOpenForm == 3) {
        setOpenImageForm(true)
    }

    console.log(isOpenTextForm);

    // TEXT
    const xTextPositionInput = useRef(null);
    const yTextPositionInput = useRef(null);
    const textColorInput = useRef(null);
    const textInput = useRef(null);
    const fontSizeInput = useRef(null);
    const textBoldInput = useRef(null);
    const textItalicInput = useRef(null);
    const textUnderlineInput = useRef(null);
    /*var index;
    for (index = 0; index < canvas.objects.length; ++index) {
        if (canvas.objects[index].selectionFlag == true) {
            if (canvas.objects[index].type.objectType == 'text') {
                setOpenTextForm(true);
            }
            else if (canvas.objects[index].type.objectType == 'figure') {
                setOpenFigureForm(true)
            }
            else if (canvas.objects[index].type.objectType == 'img') {
                setOpenImageForm(true)
            }
        }
    }*/

    return (
        <div className="canvas" style={{...canvasSizeStyle, ...canvasBackgroundStyle}}>
            {canvas.objects.map(object => <AddObject key={object.id} object={object} canvas={canvas} setCanvas={setCanvas} setOpenForm={setOpenForm}></AddObject>)}
            <AddFilter filterColor={filter} filterWidth={size.width} filterHeight={size.height}></AddFilter>

            <form className={`textForm ${isOpenTextForm ? 'active' : ''}`}>
                <input type="text" name='text' placeholder="Text" ref={textInput}/>
                <input type="number" name='fontSize' placeholder="Font size" ref={fontSizeInput}/>
                <input type="number" name='yPosition' placeholder="Top" ref={xTextPositionInput}/>
                <input type="number" name='xPosition' placeholder="Left" ref={yTextPositionInput}/>
                <div>
                  <b>Bold </b>
                  <input type="checkbox" name="bold" ref={textBoldInput}/>
                </div>
                <div>
                  <i>Italic </i>
                  <input type="checkbox" name="italic" ref={textItalicInput}/>
                </div>
                <div>
                  <u>Underline </u>
                  <input type="checkbox" name="underline" ref={textUnderlineInput}/>
                </div>
                <input type="color" name='textColor' ref={textColorInput}/>
                <button type="button">Create</button>
            </form>

        </div>
    )
}

export {ViewCanvas};