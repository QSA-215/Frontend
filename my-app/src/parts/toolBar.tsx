import {useState} from 'react'
import './toolBar.css'

type toolBarProps = {
  canvas: CanvasModel,
  setCanvas: (canvas: CanvasModel) => void,
}

const ToolBar = (props: toolBarProps) => {
  const {canvas, setCanvas} = props
  const [isOpenFigure, setOpenFigure] = useState(false)
  const [isOpenBackground, setOpenBackground] = useState(false)
  const [isOpenSamples, setOpenSamples] = useState(false)
  const [isOpenFilters, setOpenFilters] = useState(false)
  const [isOpenSave, setOpenSave] = useState(false)

  function activeFigureMenu() {
    return (() => setOpenFigure(!isOpenFigure))
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


  return(
    <div className='toolBarMain'>
      <div className='toolBar'>
        <button className='toolBar__button'>Undo</button>
        <button className='toolBar__button'>Redo</button>
        <button className='toolBar__button'>Clear</button>
        <button className='toolBar__button'>Text</button>
        <button className='toolBar__button' onClick = {activeFigureMenu()}>Figure</button>
        <button className='toolBar__button'>Image</button>
        <button className='toolBar__button' onClick = {activeBackgroundMenu()}>Background</button>
        <button className='toolBar__button' onClick = {activeSamplesMenu()}>Samples</button>
        <button className='toolBar__button'>Canvas size</button>
        <button className='toolBar__button' onClick = {() => activeFiltersMenu()}>Filters</button>
        <button className='toolBar__button' onClick = {() => activeSaveMenu()}>Save</button>
      </div>
      <div className='menues'>
        <div className={`menues__figure figureMenu ${isOpenFigure ? 'active' : ''}`}>
          <button className='figureMenu__button' onClick = {activeFigureMenu()}>Circle</button>
          <button className='figureMenu__button' onClick = {activeFigureMenu()}>Square</button>
          <button className='figureMenu__button' onClick = {activeFigureMenu()}>Triangle</button>
        </div>
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
    </div>
  )
}

export {ToolBar};