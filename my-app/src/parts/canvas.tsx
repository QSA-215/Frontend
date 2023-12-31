import './canvas.css'
import {useRef} from 'react'
import {AddObject, AddFilter} from './addObject'
import {useAppSelector, useAppActions} from '../redux/hooks'

const ViewCanvas = () => {
    const canvas = useAppSelector(state => state.canvas)
    const {createDeleteObjectAction,
            createChangeObjectPositionAction,
            createChangeObjectSizeAction,
            createChangeObjectTextAction,
            createChangeObjectColorAction,
            createChangeFigureTypeAction,
            createChangeTextDecorationAction} = useAppActions()

    const canvasSizeStyle = {
        width: canvas.size.width,
        height: canvas.size.height
    };

    let canvasBackgroundStyle = {};
    if (canvas.background.backgroundType === 'img') {
        canvasBackgroundStyle = {
            backgroundImage: 'url(' + canvas.background.url + ')',
            backgroundSize: 'cover'
        };
    }
    if (canvas.background.backgroundType === 'color') {
        canvasBackgroundStyle = {
            background: canvas.background.color
        };
    }

    // GENERAL
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
        const newPosition = {
                x: xTextPositionInput.current.value,
                y: yTextPositionInput.current.value
              };     
        const newText = textInput.current.value;
        const newFontSize = fontSizeInput.current.value;
        const newColor = textColorInput.current.value;


        const newBold = textBoldInput?.current?.['checked'];
        const newItalic = textItalicInput?.current?.['checked'];
        const newUnderline = textUnderlineInput?.current?.['checked'];
        createChangeTextDecorationAction(canvas.objects[objectPosition].id, newBold, newItalic, newUnderline);
        createChangeObjectTextAction(canvas.objects[objectPosition].id, newText, newFontSize);
        createChangeObjectColorAction(canvas.objects[objectPosition].id, newColor);
        createChangeObjectPositionAction(canvas.objects[objectPosition].id, newPosition);
    }

    // CHANGE FIGURE
    const xFigurePositionInput = useRef(null);
    const yFigurePositionInput = useRef(null);
    const figureWidthInput = useRef(null);
    const figureHeightInput = useRef(null);
    const figureColorInput = useRef(null);
    const figureType = useRef(null);
    function ChangeFigure() {
        const newPosition = {
            x: Number(xFigurePositionInput?.current?.['value']),
            y: Number(yFigurePositionInput?.current?.['value'])
        };
        const newSize = {
            width: Number(figureWidthInput?.current?.['value']),
            height: Number(figureHeightInput?.current?.['value'])
        }
        const newColor = figureColorInput?.current?.['value'];
        const newFigureType = figureType?.current?.['value'];
        createChangeFigureTypeAction(canvas.objects[objectPosition].id, newFigureType);
        createChangeObjectSizeAction(canvas.objects[objectPosition].id, newSize);
        createChangeObjectColorAction(canvas.objects[objectPosition].id, newColor);
        createChangeObjectPositionAction(canvas.objects[objectPosition].id, newPosition);
    }

    // CHANGE IMAGE
    const xImagePositionInput = useRef(null);
    const yImagePositionInput = useRef(null);
    const imageWidthInput = useRef(null);
    const imageHeightInput = useRef(null);
    function ChangeImage() {
        const newPosition = {
            x: Number(xImagePositionInput?.current?.['value']),
            y: Number(yImagePositionInput?.current?.['value'])
        };
        const newSize = {
            width: Number(imageWidthInput?.current?.['value']),
            height: Number(imageHeightInput?.current?.['value'])
        }
        createChangeObjectSizeAction(canvas.objects[objectPosition].id, newSize);
        createChangeObjectPositionAction(canvas.objects[objectPosition].id, newPosition);
    }

    return (
        <div className="canvas" style={{...canvasSizeStyle, ...canvasBackgroundStyle}}>
            {canvas.objects.map(object => <AddObject key={object.id} object={object} />)}
            <AddFilter />

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
                  <button type="button" onClick={() => createDeleteObjectAction(canvas.objects[objectPosition].id)}>Delete</button>
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
                  <button type="button" onClick={() => createDeleteObjectAction(canvas.objects[objectPosition].id)}>Delete</button>
                </div>
          </form>

          <form className={`form imageForm ${isOpenImageForm ? 'active' : ''}`}>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].type.size.height : ''} type="number" name='imageHeight' placeholder="Height" ref={imageHeightInput}/>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].type.size.width : ''} type="number" name='imageWidth' placeholder="Width" ref={imageWidthInput}/>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].position.y : ''} type="number" name='yPosition' placeholder="Top" ref={yImagePositionInput}/>
            <input defaultValue={isOpenImageForm ? canvas.objects[objectPosition].position.x : ''} type="number" name='xPosition' placeholder="Left" ref={xImagePositionInput}/>
                <div>
                  <button type="button" onClick={ChangeImage}>Apply</button>
                  <button type="button" onClick={() => createDeleteObjectAction(canvas.objects[objectPosition].id)}>Delete</button>
                </div>
          </form>

        </div>
    )
}

export {ViewCanvas};