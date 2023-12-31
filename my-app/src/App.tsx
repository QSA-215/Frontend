import './App.css'
import {Header} from './parts/header'
import {ToolBar} from './parts/toolBar'
import {ViewCanvas} from './parts/canvas'
import {useState} from 'react'
import {ThirdCanvas} from '../../data/data3'


const App = () => {
  const [canvas, setCanvas] = useState(ThirdCanvas);

  return (
    <div className='app'>
      <Header />
      <ToolBar canvas={canvas} setCanvas={setCanvas} />
      <ViewCanvas canvas={canvas} setCanvas={setCanvas} />
    </div>
  )
}

export default App
