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
    const [objectPosition, setObjectPosition] = useState(null);
    const [isOpenTextForm, setOpenTextForm] = useState(false);
    const [isOpenFigureForm, setOpenFigureForm] = useState(false);
    const [isOpenImageForm, setOpenImageForm] = useState(false);

    if (isOpenForm == 1) {
        setOpenTextForm(!isOpenTextForm);
        setOpenForm(0);
    }
    else if (isOpenForm == 2) {
        setOpenFigureForm(!isOpenFigureForm);
        setOpenForm(0);
    }
    else if (isOpenForm == 3) {
        setOpenImageForm(!isOpenImageForm);
        setOpenForm(0);
    }

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

    // CHANGE TEXT
    const xTextPositionInput = useRef(null);
    const yTextPositionInput = useRef(null);
    const textColorInput = useRef(null);
    const textInput = useRef(null) //(objectPosition != null) ? canvas.objects[objectPosition].type.str : null;
    const fontSizeInput = useRef(null);
    const textBoldInput = useRef(null);
    const textItalicInput = useRef(null);
    const textUnderlineInput = useRef(null);
    function ChangeText() {
        const newCanvas = {
          ...canvas,
        };
        const newObjects = canvas.objects;
        const textObject = {
              id: newObjects[objectPosition].id,
              position: {
                x: xTextPositionInput?.current?.['value'],
                y: yTextPositionInput?.current?.['value']
              },
              type: {
                objectType: 'text',
                str: textInput?.current?.['value'],
                fontSize: fontSizeInput?.current?.['value'],
                color: textColorInput?.current?.['value'],
                bold: textBoldInput?.current?.['checked'],
                italic: textItalicInput?.current?.['checked'],
                underline: textUnderlineInput?.current?.['checked']
              },
              selectionFlag: false
            };
        newObjects[objectPosition] = textObject;
        newCanvas.objects = newObjects;
        setOpenTextForm(!isOpenTextForm);
        setCanvas(newCanvas)
    }

    // CHANGE FIGURE
    const xFigurePositionInput = useRef(null);
    const yFigurePositionInput = useRef(null);
    const figureWidthInput = useRef(null);
    const figureHeightInput = useRef(null);
    const figureColorInput = useRef(null);
    const figureType = useRef(null);
    function ChangeFigure() {
        const newCanvas = {
            ...canvas,
        };
        const newObjects = canvas.objects;
        const figureObject = {
            id: newObjects[objectPosition].id,
            position: {
                x: Number(xFigurePositionInput?.current?.['value']),
                y: Number(yFigurePositionInput?.current?.['value'])
            },
            type: {
                objectType: 'figure',
                type: figureType?.current?.['value'],
                size: {
                    width: Number(figureWidthInput?.current?.['value']),
                    height: Number(figureHeightInput?.current?.['value'])
                },
                color: figureColorInput?.current?.['value']
            },
            selectionFlag: false
        };
        newObjects[objectPosition] = figureObject;
        newCanvas.objects = newObjects;
        setOpenFigureForm(!isOpenFigureForm);
        setCanvas(newCanvas)
    }

    // CHANGE IMAGE
    const xImagePositionInput = useRef(null);
    const yImagePositionInput = useRef(null);
    const imageWidthInput = useRef(null);
    const imageHeightInput = useRef(null);
    const imageUrl = useRef(null);
    function ChangeImage() {
        const newCanvas = {
            ...canvas,
        };
        const newObjects = canvas.objects;
        const imageObject = {
            id: newObjects[objectPosition].id,
            position: {
                x: xImagePositionInput?.current?.['value'],
                y: yImagePositionInput?.current?.['value']
            },
            type: {
                objectType: 'img',
                url: URL.createObjectURL(imageUrl?.current?.['files'][0]),
                size: {
                    width: imageWidthInput?.current?.['value'],
                    height: imageHeightInput?.current?.['value']
                }
            },
            selectionFlag: false
        };
        newObjects[objectPosition] = imageObject;
        newCanvas.objects = newObjects;
        setOpenImageForm(!isOpenImageForm);
        setCanvas(newCanvas)
    }

    // DELETE
    function DeleteObject() {
        const newCanvas = {
          ...canvas,
        };
        const newObjects = canvas.objects;
        newObjects.splice(objectPosition, 1);
        newCanvas.objects = newObjects;
        setOpenTextForm(false);
        setOpenFigureForm(false);
        setOpenImageForm(false);
        setCanvas(newCanvas)
    }

    return (
        <div className="canvas" style={{...canvasSizeStyle, ...canvasBackgroundStyle}}>
            {canvas.objects.map(object => <AddObject key={object.id} object={object} canvas={canvas} setCanvas={setCanvas} isOpenForm={isOpenForm} setOpenForm={setOpenForm} setObjectPosition={setObjectPosition}></AddObject>)}
            <AddFilter filterColor={filter} filterWidth={size.width} filterHeight={size.height}></AddFilter>

            <form className={`textForm ${isOpenTextForm ? 'active' : ''}`}>
                <input type='text' name='text' placeholder="Text" ref={textInput}/>
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
                <div>
                  <button type="button" onClick={ChangeText}>Apply</button>
                  <button type="button" onClick={DeleteObject}>Delete</button>
                </div>
            </form>

            <form className={`figureForm ${isOpenFigureForm ? 'active' : ''}`}>
            <select name="figureType" ref={figureType}>
              <option value="circle">Circle</option>
              <option value="rectangle">Rectangle</option>
              <option value="triangle">Triangle</option>
            </select>
            <input type="number" name='figureHeight' placeholder="Height" ref={figureHeightInput}/>
            <input type="number" name='figureWidth' placeholder="Width" ref={figureWidthInput}/>
            <input type="number" name='yPosition' placeholder="Top" ref={xFigurePositionInput}/>
            <input type="number" name='xPosition' placeholder="Left" ref={yFigurePositionInput}/>
            <input type="color" name='figureColor' ref={figureColorInput}/>
                <div>
                  <button type="button" onClick={ChangeFigure}>Apply</button>
                  <button type="button" onClick={DeleteObject}>Delete</button>
                </div>
          </form>

          <form className={`imageForm ${isOpenImageForm ? 'active' : ''}`}>
            <input type="file" name='image' ref={imageUrl}/>
            <input type="number" name='imageHeight' placeholder="Height" ref={imageHeightInput}/>
            <input type="number" name='imageWidth' placeholder="Width" ref={imageWidthInput}/>
            <input type="number" name='yPosition' placeholder="Top" ref={xImagePositionInput}/>
            <input type="number" name='xPosition' placeholder="Left" ref={yImagePositionInput}/>
                <div>
                  <button type="button" onClick={ChangeImage}>Apply</button>
                  <button type="button" onClick={DeleteObject}>Delete</button>
                </div>
          </form>

        </div>
    )
}

export {ViewCanvas};