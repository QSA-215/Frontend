import './canvas.css'
import {useRef} from 'react'
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

    let objectPosition = -1;
    let isOpenTextForm = false;
    let isOpenFigureForm = false;
    let isOpenImageForm = false;

    let x = -1;
    canvas.objects.map(object => {
        x += 1;
        if (object.selectionFlag === true) {
            objectPosition = x;
            if (object.type.objectType == 'text') {isOpenTextForm = true}
            else if (object.type.objectType == 'figure') {isOpenFigureForm = true}
            else if (object.type.objectType == 'img') {isOpenImageForm = true}
        }
    })

    // CHANGE TEXT
    const xTextPositionInput = useRef(null);
    const yTextPositionInput = useRef(null);
    const textColorInput = useRef(null);
    const textInput = useRef(null);
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
                x: Number(xTextPositionInput?.current?.['value']),
                y: Number(yTextPositionInput?.current?.['value'])
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
              selectionFlag: newObjects[objectPosition].selectionFlag
            };
        newObjects[objectPosition] = textObject;
        newCanvas.objects = newObjects;
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
            selectionFlag: newObjects[objectPosition].selectionFlag
        };
        newObjects[objectPosition] = figureObject;
        newCanvas.objects = newObjects;
        setCanvas(newCanvas)
    }

    // CHANGE IMAGE
    const xImagePositionInput = useRef(null);
    const yImagePositionInput = useRef(null);
    const imageWidthInput = useRef(null);
    const imageHeightInput = useRef(null);
    function ChangeImage() {
        const newCanvas = {
            ...canvas,
        };
        const newObjects = canvas.objects;
        const imageObject = {
            id: newObjects[objectPosition].id,
            position: {
                x: Number(xImagePositionInput?.current?.['value']),
                y: Number(yImagePositionInput?.current?.['value'])
            },
            type: {
                objectType: 'img',
                url: newObjects[objectPosition].type.url,
                size: {
                    width: Number(imageWidthInput?.current?.['value']),
                    height: Number(imageHeightInput?.current?.['value'])
                }
            },
            selectionFlag: newObjects[objectPosition].selectionFlag
        };
        newObjects[objectPosition] = imageObject;
        newCanvas.objects = newObjects;
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
        isOpenTextForm = false;
        isOpenFigureForm = false;
        isOpenImageForm = false;
        setCanvas(newCanvas)
    }

    return (
        <div className="canvas" style={{...canvasSizeStyle, ...canvasBackgroundStyle}}>
            {canvas.objects.map(object => <AddObject key={object.id} object={object} canvas={canvas} setCanvas={setCanvas} />)}
            <AddFilter filterColor={filter} filterWidth={size.width} filterHeight={size.height} />

            <form className={`form textForm ${isOpenTextForm ? 'active' : ''}`}>
                <input defaultValue={isOpenTextForm ? canvas.objects[objectPosition].type.str : ''} type='text' name='text' placeholder="Text" ref={textInput}/>
                <input defaultValue={isOpenTextForm ? canvas.objects[objectPosition].type.fontSize : ''} type="number" name='fontSize' placeholder="Font size" ref={fontSizeInput}/>
                <input defaultValue={isOpenTextForm ? canvas.objects[objectPosition].position.y : ''} type="number" name='yPosition' placeholder="Top" ref={yTextPositionInput}/>
                <input defaultValue={isOpenTextForm ? canvas.objects[objectPosition].position.x : ''} type="number" name='xPosition' placeholder="Left" ref={xTextPositionInput}/>
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
                <input defaultValue={isOpenTextForm ? canvas.objects[objectPosition].type.color : '#000000'} type="color" name='textColor' ref={textColorInput}/>
                <div>
                  <button type="button" onClick={ChangeText}>Apply</button>
                  <button type="button" onClick={DeleteObject}>Delete</button>
                </div>
            </form>

            <form className={`form figureForm ${isOpenFigureForm ? 'active' : ''}`}>
            <select name="figureType" ref={figureType}>
              <option selected={(isOpenFigureForm && canvas.objects[objectPosition].type.type == 'circle') ? 'selected' : undefined} value="circle">Circle</option>
              <option selected={(isOpenFigureForm && canvas.objects[objectPosition].type.type == 'rectangle') ? 'selected' : undefined} value="rectangle">Rectangle</option>
              <option selected={(isOpenFigureForm && canvas.objects[objectPosition].type.type == 'triangle') ? 'selected' : undefined} value="triangle">Triangle</option>
            </select>
            <input defaultValue={isOpenFigureForm ? canvas.objects[objectPosition].type.size.height : ''} type="number" name='figureHeight' placeholder="Height" ref={figureHeightInput}/>
            <input defaultValue={isOpenFigureForm ? canvas.objects[objectPosition].type.size.width : ''} type="number" name='figureWidth' placeholder="Width" ref={figureWidthInput}/>
            <input defaultValue={isOpenFigureForm ? canvas.objects[objectPosition].position.y : ''} type="number" name='yPosition' placeholder="Top" ref={yFigurePositionInput}/>
            <input defaultValue={isOpenFigureForm ? canvas.objects[objectPosition].position.x : ''} type="number" name='xPosition' placeholder="Left" ref={xFigurePositionInput}/>
            <input defaultValue={isOpenFigureForm ? canvas.objects[objectPosition].type.color : '#000000'} type="color" name='figureColor' ref={figureColorInput}/>
                <div>
                  <button type="button" onClick={ChangeFigure}>Apply</button>
                  <button type="button" onClick={DeleteObject}>Delete</button>
                </div>
          </form>

          <form className={`form imageForm ${isOpenImageForm ? 'active' : ''}`}>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].type.size.height : ''} type="number" name='imageHeight' placeholder="Height" ref={imageHeightInput}/>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].type.size.width : ''} type="number" name='imageWidth' placeholder="Width" ref={imageWidthInput}/>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].position.y : ''} type="number" name='yPosition' placeholder="Top" ref={yImagePositionInput}/>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].position.x : ''} type="number" name='xPosition' placeholder="Left" ref={xImagePositionInput}/>
                <div>
                  <button type="button" onClick={ChangeImage}>Apply</button>
                  <button type="button" onClick={DeleteObject}>Delete</button>
                </div>
          </form>

        </div>
    )
}

export {ViewCanvas};