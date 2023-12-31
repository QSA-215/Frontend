import {useState, useRef} from 'react'
import './toolBar.css'
import {CanvasModel} from '../../../data/types'
import {Sample1, Sample2, Sample3} from '../../../data/samples'
import {useAppSelector, useAppActions} from '../redux/hooks'

const ToolBar = () => {
  const canvas = useAppSelector(state => state.canvas)
  const {createClearAction,
          createAddObjectAction,
          createApplyFilterAction,
          createSetCanvasAction,
          createChangeCanvasSizeAction,
          createChangeCanvasBackgroundAction} = useAppActions()
  
  // GENERAL +++
  const [isOpenTextForm, setOpenTextForm] = useState(false);
  const [isOpenFigureForm, setOpenFigureForm] = useState(false);
  const [isOpenImageForm, setOpenImageForm] = useState(false);
  const [isOpenBackgroundForm, setOpenBackgroundForm] = useState(false);
  const [isOpenSamples, setOpenSamples] = useState(false);
  const [isOpenCanvasSizeForm, setOpenCanvasSizeForm] = useState(false);
  const [isOpenFilters, setOpenFilters] = useState(false);
  const [isOpenSave, setOpenSave] = useState(false);

  function ActiveTextForm() {
    setOpenTextForm(!isOpenTextForm);
    setOpenFigureForm(false);
    setOpenImageForm(false);
    setOpenBackgroundForm(false);
    setOpenSamples(false);
    setOpenCanvasSizeForm(false);
    setOpenFilters(false);
    setOpenSave(false);
  }

  function ActiveFigureForm() {
    setOpenTextForm(false);
    setOpenFigureForm(!isOpenFigureForm);
    setOpenImageForm(false);
    setOpenBackgroundForm(false);
    setOpenSamples(false);
    setOpenCanvasSizeForm(false);
    setOpenFilters(false);
    setOpenSave(false);
  }

  function ActiveImageForm() {
    setOpenTextForm(false);
    setOpenFigureForm(false);
    setOpenImageForm(!isOpenImageForm);
    setOpenBackgroundForm(false);
    setOpenSamples(false);
    setOpenCanvasSizeForm(false);
    setOpenFilters(false);
    setOpenSave(false);
  }

  function ActiveBackgroundMenu() {
    setOpenTextForm(false);
    setOpenFigureForm(false);
    setOpenImageForm(false);
    setOpenBackgroundForm(!isOpenBackgroundForm);
    setOpenSamples(false);
    setOpenCanvasSizeForm(false);
    setOpenFilters(false);
    setOpenSave(false);
  }

  function ActiveSamplesMenu() {
    setOpenTextForm(false);
    setOpenFigureForm(false);
    setOpenImageForm(false);
    setOpenBackgroundForm(false);
    setOpenSamples(!isOpenSamples);
    setOpenCanvasSizeForm(false);
    setOpenFilters(false);
    setOpenSave(false);
  }

  function ActiveCanvasSizeForm() {
    setOpenTextForm(false);
    setOpenFigureForm(false);
    setOpenImageForm(false);
    setOpenBackgroundForm(false);
    setOpenSamples(false);
    setOpenCanvasSizeForm(!isOpenCanvasSizeForm);
    setOpenFilters(false);
    setOpenSave(false);
  }

  function ActiveFiltersMenu() {
    setOpenTextForm(false);
    setOpenFigureForm(false);
    setOpenImageForm(false);
    setOpenBackgroundForm(false);
    setOpenSamples(false);
    setOpenCanvasSizeForm(false);
    setOpenFilters(!isOpenFilters);
    setOpenSave(false);
  }

  function ActiveSaveMenu() {
    setOpenTextForm(false);
    setOpenFigureForm(false);
    setOpenImageForm(false);
    setOpenBackgroundForm(false);
    setOpenSamples(false);
    setOpenCanvasSizeForm(false);
    setOpenFilters(false);
    setOpenSave(!isOpenSave);
  }

  // TEXT +++
  const xTextPositionInput = useRef(null);
  const yTextPositionInput = useRef(null);
  const textColorInput = useRef(null);
  const textInput = useRef(null);
  const fontSizeInput = useRef(null);
  const textBoldInput = useRef(null);
  const textItalicInput = useRef(null);
  const textUnderlineInput = useRef(null);

  function AddText() {
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
    createAddObjectAction(textObject);
    setOpenTextForm(!isOpenTextForm);
  }

  // FIGURE +++
  const xFigurePositionInput = useRef(null);
  const yFigurePositionInput = useRef(null);
  const figureWidthInput = useRef(null);
  const figureHeightInput = useRef(null);
  const figureColorInput = useRef(null);
  const figureType = useRef(null);

  function AddFigure() {
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
    createAddObjectAction(figureObject);
    setOpenFigureForm(!isOpenFigureForm);
  }

  // IMAGE +++
  const xImagePositionInput = useRef(null);
  const yImagePositionInput = useRef(null);
  const imageWidthInput = useRef(null);
  const imageHeightInput = useRef(null);
  const imageUrl = useRef(null);

  function AddImage() {
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
              width: Number(imageWidthInput?.current?.['value']),
              height: Number(imageHeightInput?.current?.['value'])
            }
          },
          selectionFlag: false
        };
    createAddObjectAction(imageObject);
    setOpenImageForm(!isOpenImageForm);
  }

  // BACKGROUND +++
  const canvasBackgroundColor = useRef(null);
  const canvasBackgroundUrl = useRef(null);

  function ApplyCanvasBackgroundImage() {
    const newBackground = {
      backgroundType: 'img',
      url: URL.createObjectURL(canvasBackgroundUrl?.current?.['files'][0])
    };
    createChangeCanvasBackgroundAction(newBackground);
    setOpenBackgroundForm(false);
  }

  function ApplyCanvasBackgroundColor() {const newBackground = {
      backgroundType: 'color',
      color: canvasBackgroundColor?.current?.['value']
    };
    createChangeCanvasBackgroundAction(newBackground);
    setOpenBackgroundForm(false);
  }

  // SAMPLES ---
  function ApplySample(newCanvas: CanvasModel) {
    createSetCanvasAction(newCanvas);
    setOpenSamples(false);
  }

  // CANVAS SIZE +++
  const canvasWidthInput = useRef(null);
  const canvasHeightInput = useRef(null);

  function ApplyCanvasSize() {
    const newSize = {
      width: Number(canvasWidthInput?.current?.['value']),
      height: Number(canvasHeightInput?.current?.['value']),
    };
    createChangeCanvasSizeAction(newSize);
    setOpenCanvasSizeForm(false);
  }
  
  // FILTERS +++
  function ApplyFilter(filterColor: string) {
    createApplyFilterAction(filterColor);
    setOpenFilters(false);
  }

  // SAVE ++--
  function ExportToJson(canvasData: any) {
    const canvas = JSON.stringify(canvasData);
    const filename = "canvas.json";

    const file = new Blob([canvas], {type: "text/plain;charset=utf-8"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setOpenSave(false)
  }

  function ImportFromJSON() {
    const elemInput = document.querySelector('[type="file"]');
    const files = elemInput.files;

    const reader = new FileReader()
    reader.readAsText(files[0])
    reader.addEventListener('load', (e) => {
      let JSONString = e.target.result;
    let newCanvas = JSON.parse(JSONString)
    createSetCanvasAction(newCanvas)
    });
    setOpenSave(false)
  }

  return (
    <div className='toolBarMain'>

      <div className='toolBar'>
        <button className='toolBar__button'>Undo</button>
        <button className='toolBar__button'>Redo</button>
        <button className='toolBar__button' onClick = {() => createClearAction()}>Clear</button>
        <button className='toolBar__button' onClick = {() => ActiveTextForm()}>Text</button>
        <button className='toolBar__button' onClick = {() => ActiveFigureForm()}>Figure</button>
        <button className='toolBar__button' onClick = {() => ActiveImageForm()}>Image</button>
        <button className='toolBar__button' onClick = {() => ActiveBackgroundMenu()}>Background</button>
        <button className='toolBar__button' onClick = {() => ActiveSamplesMenu()}>Samples</button>
        <button className='toolBar__button' onClick = {() => ActiveCanvasSizeForm()}>Canvas size</button>
        <button className='toolBar__button' onClick = {() => ActiveFiltersMenu()}>Filters</button>
        <button className='toolBar__button' onClick = {() => ActiveSaveMenu()}>Save</button>
      </div>

      <div className='menues'>
        <div className={`menues__samples samplesMenu ${isOpenSamples ? 'active' : ''}`}>
          <button className='samplesMenu__button' onClick = {() => ApplySample(Sample1)}>Sample 1</button>
          <button className='samplesMenu__button' onClick = {() => ApplySample(Sample2)}>Sample 2</button>
          <button className='samplesMenu__button' onClick = {() => ApplySample(Sample3)}>Sample 3</button>
        </div>
        <div className={`menues__filters filtersMenu ${isOpenFilters ? 'active' : ''}`}>
          <button className='filtersMenu__button' onClick = {() => ApplyFilter('none')}>None</button>
          <button className='filtersMenu__button' onClick = {() => ApplyFilter('gray')}>Gray</button>
          <button className='filtersMenu__button' onClick = {() => ApplyFilter('red')}>Red</button>
          <button className='filtersMenu__button' onClick = {() => ApplyFilter('green')}>Green</button>
          <button className='filtersMenu__button' onClick = {() => ApplyFilter('blue')}>Blue</button>
        </div>
        <div className={`menues__save saveMenu ${isOpenSave ? 'active' : ''}`}>
          <button className='saveMenu__button' onClick = {() => ActiveSaveMenu()}>JPEG</button>
          <button className='saveMenu__button' onClick = {() => ActiveSaveMenu()}>PNG</button>
          <button className='saveMenu__button' onClick = {() => ImportFromJSON()}>Upload JSON</button>
          <input type="file" accept=".json,application/json"/>
          <button className='saveMenu__button' onClick = {() => ExportToJson(canvas)}>JSON</button>
        </div>
      </div>

      <form className={`textForm ${isOpenTextForm ? 'active' : ''}`}>
        <input required type="text" name='text' placeholder="Text" ref={textInput}/>
        <input required type="number" name='fontSize' placeholder="Font size" ref={fontSizeInput}/>
        <input required type="number" name='yPosition' placeholder="Top" ref={yTextPositionInput}/>
        <input required type="number" name='xPosition' placeholder="Left" ref={xTextPositionInput}/>
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
        <button type="button" onClick={AddText}>Create</button>
      </form>

      <form className={`figureForm ${isOpenFigureForm ? 'active' : ''}`}>
        <select name="figureType" ref={figureType}>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
        </select>
        <input type="number" name='figureHeight' placeholder="Height" ref={figureHeightInput}/>
        <input type="number" name='figureWidth' placeholder="Width" ref={figureWidthInput}/>
        <input type="number" name='yPosition' placeholder="Top" ref={yFigurePositionInput}/>
        <input type="number" name='xPosition' placeholder="Left" ref={xFigurePositionInput}/>
        <input type="color" name='figureColor' ref={figureColorInput}/>
        <button type="button" onClick={AddFigure}>Create</button>
      </form>

      <form className={`imageForm ${isOpenImageForm ? 'active' : ''}`}>
        <input type="file" name='image' accept='image/*' ref={imageUrl}/>
        <input type="number" name='imageHeight' placeholder="Height" ref={imageHeightInput}/>
        <input type="number" name='imageWidth' placeholder="Width" ref={imageWidthInput}/>
        <input type="number" name='yPosition' placeholder="Top" ref={yImagePositionInput}/>
        <input type="number" name='xPosition' placeholder="Left" ref={xImagePositionInput}/>
        <button type="button" onClick={AddImage}>Create</button>
      </form>

      <form className={`backgroundForm ${isOpenBackgroundForm ? 'active' : ''}`}>
        <div>
          <input type="file" name='image' accept='image/*' ref={canvasBackgroundUrl}/>
          <button type="button" onClick={ApplyCanvasBackgroundImage}>Apply</button>
        </div>
        <div>
          <input type="color" name='figureColor' ref={canvasBackgroundColor}/>
          <button type="button" onClick={ApplyCanvasBackgroundColor}>Apply</button>
        </div>
      </form>

      <form className={`canvasSizeForm ${isOpenCanvasSizeForm ? 'active' : ''}`}>
        <input type="number" name='canvasHeight' placeholder="Height" defaultValue={canvas.size.height} ref={canvasHeightInput}/>
        <input type="number" name='canvasWidth' placeholder="Width" defaultValue={canvas.size.width} ref={canvasWidthInput}/>
        <button type="button" onClick={ApplyCanvasSize}>Apply</button>
      </form>

    </div>
  )
}

export {ToolBar};