import {useState, useRef} from 'react'
import {CanvasModel} from '../../../data/types'
import './toolBar.css'

type toolBarProps = {
  canvas: CanvasModel,
  setCanvas: (canvas: CanvasModel) => void,
}

const ToolBar = (props: toolBarProps) => {
  const {canvas, setCanvas} = props
  const [isOpenBackground, setOpenBackground] = useState(false)
  const [isOpenSamples, setOpenSamples] = useState(false)
  const [isOpenFilters, setOpenFilters] = useState(false)
  const [isOpenSave, setOpenSave] = useState(false)

  function clear() {
    const newCanvas = {
      ...canvas,
    };
    newCanvas.objects = [];
    newCanvas.filter = 'none';
    newCanvas.background = {
      backgroundType: 'color',
      color: '#FFFFFF'
    };
    setCanvas(newCanvas)
  }

  const xTextPositionInput = useRef(null);
  const yTextPositionInput = useRef(null);
  const textColorInput = useRef(null);
  const textInput = useRef(null);
  const fontSizeInput = useRef(null);
  const textBoldInput = useRef(null);
  const textItalicInput = useRef(null);
  const textUnderlineInput = useRef(null);

  function addText() {
    const newCanvas = {
      ...canvas,
    };
    const newObjects = canvas.objects;
    const textObject = {
          id: canvas.objects.length + 1,
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
    newObjects.push(textObject);
    newCanvas.objects = newObjects;
    setOpenTextForm(!isOpenTextForm);
    setCanvas(newCanvas)
  }

  const xFigurePositionInput = useRef(null);
  const yFigurePositionInput = useRef(null);
  const figureWidthInput = useRef(null);
  const figureHeightInput = useRef(null);
  const figureColorInput = useRef(null);
  const figureType = useRef(null);

  function addFigure() {
    const newCanvas = {
      ...canvas,
    };
    const newObjects = canvas.objects;
    const figureObject = {
          id: canvas.objects.length + 1,
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
    newObjects.push(figureObject);
    newCanvas.objects = newObjects;
    setOpenFigureForm(!isOpenFigureForm);
    setCanvas(newCanvas)
  }

  const xImagePositionInput = useRef(null);
  const yImagePositionInput = useRef(null);
  const imageWidthInput = useRef(null);
  const imageHeightInput = useRef(null);
  const imageUrl = useRef(null);

  function addImage() {
    const newCanvas = {
      ...canvas,
    };
    const newObjects = canvas.objects;
    const imageObject = {
          id: canvas.objects.length + 1,
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
    newObjects.push(imageObject);
    newCanvas.objects = newObjects;
    setOpenImageForm(!isOpenImageForm);
    setCanvas(newCanvas)
  }

  function activeBackgroundMenu() {
    return (() => setOpenBackground(!isOpenBackground))
  }
  function activeSamplesMenu() {
    return (() => setOpenSamples(!isOpenSamples))
  }

  function activeFiltersMenu() {
    return (setOpenFilters(!isOpenFilters))
  }

  function applyFilter(filterColor: string) {
    const newCanvas = {
      ...canvas,
    };
    newCanvas.filter = filterColor;
    setCanvas(newCanvas)
    return (setOpenFilters(!isOpenFilters))
  }

  function activeSaveMenu() {
    return (setOpenSave(!isOpenSave))
  }

  function exportToJson(canvasData: any) {
    const canvas = JSON.stringify(canvasData);
    const filename = "canvas.json";

    const file = new Blob([canvas], {type: "text/plain;charset=utf-8"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setOpenSave(!isOpenSave)
  }

  function importFromJSON() {
    const elemInput = document.querySelector('[type="file"]');
    const files = elemInput.files;

    const reader = new FileReader()
    reader.readAsText(files[0])
    reader.addEventListener('load', (e) => {
      let JSONString = e.target.result;
    let newCanvas = JSON.parse(JSONString)
    setCanvas(newCanvas)
    });
    setOpenSave(!isOpenSave)
  }

  const [isOpenTextForm, setOpenTextForm] = useState(false)
  function activeTextForm() {
    return (() => setOpenTextForm(!isOpenTextForm))
  }

  const [isOpenFigureForm, setOpenFigureForm] = useState(false)
  function activeFigureForm() {
    return (() => setOpenFigureForm(!isOpenFigureForm))
  }

  const [isOpenImageForm, setOpenImageForm] = useState(false)
  function activeImageForm() {
    return (() => setOpenImageForm(!isOpenImageForm))
  }

  return(
    <div className='toolBarMain'>
      <div className='toolBar'>
        <button className='toolBar__button'>Undo</button>
        <button className='toolBar__button'>Redo</button>
        <button className='toolBar__button' onClick = {() => clear()}>Clear</button>
        <button className='toolBar__button' onClick = {activeTextForm()}>Text</button>
        <button className='toolBar__button' onClick = {activeFigureForm()}>Figure</button>
        <button className='toolBar__button' onClick = {activeImageForm()}>Image</button>
        <button className='toolBar__button' onClick = {activeBackgroundMenu()}>Background</button>
        <button className='toolBar__button' onClick = {activeSamplesMenu()}>Samples</button>
        <button className='toolBar__button'>Canvas size</button>
        <button className='toolBar__button' onClick = {() => activeFiltersMenu()}>Filters</button>
        <button className='toolBar__button' onClick = {() => activeSaveMenu()}>Save</button>
      </div>
      <div className='menues'>
        <div className={`menues__background backgroundMenu ${isOpenBackground ? 'active' : ''}`}>
          <button className='backgroundMenu__button' onClick = {activeBackgroundMenu()}>Color</button>
          <button className='backgroundMenu__button' onClick = {activeBackgroundMenu()}>Image</button>
        </div>
        <div className={`menues__samples samplesMenu ${isOpenSamples ? 'active' : ''}`}>
          <button className='samplesMenu__button' onClick = {activeSamplesMenu()}>Sample 1</button>
          <button className='samplesMenu__button' onClick = {activeSamplesMenu()}>Sample 2</button>
          <button className='samplesMenu__button' onClick = {activeSamplesMenu()}>Sample 3</button>
        </div>
        <div className={`menues__filters filtersMenu ${isOpenFilters ? 'active' : ''}`}>
          <button className='filtersMenu__button' onClick = {() => applyFilter('none')}>None</button>
          <button className='filtersMenu__button' onClick = {() => applyFilter('gray')}>Gray</button>
          <button className='filtersMenu__button' onClick = {() => applyFilter('red')}>Red</button>
          <button className='filtersMenu__button' onClick = {() => applyFilter('green')}>Green</button>
          <button className='filtersMenu__button' onClick = {() => applyFilter('blue')}>Blue</button>
        </div>
        <div className={`menues__save saveMenu ${isOpenSave ? 'active' : ''}`}>
          <button className='saveMenu__button' onClick = {() => activeSaveMenu()}>JPEG</button>
          <button className='saveMenu__button' onClick = {() => activeSaveMenu()}>PNG</button>
          <button className='saveMenu__button' onClick = {() => importFromJSON()}>Upload JSON</button>
          <input type="file" accept=".json,application/json"/>
          <button className='saveMenu__button' onClick = {() => exportToJson(canvas)}>JSON</button>
        </div>
      </div>

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
        <button type="button" onClick={addText}>Create</button>
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
        <button type="button" onClick={addFigure}>Create</button>
      </form>

      <form className={`imageForm ${isOpenImageForm ? 'active' : ''}`}>
        <input type="file" name='image' ref={imageUrl}/>
        <input type="number" name='imageHeight' placeholder="Height" ref={imageHeightInput}/>
        <input type="number" name='imageWidth' placeholder="Width" ref={imageWidthInput}/>
        <input type="number" name='yPosition' placeholder="Top" ref={xImagePositionInput}/>
        <input type="number" name='xPosition' placeholder="Left" ref={yImagePositionInput}/>
        <button type="button" onClick={addImage}>Create</button>
      </form>

    </div>
  )
}

export {ToolBar};
