import './App.css'
import {Header} from './parts/header'
import {ToolBar} from './parts/toolBar'
import {ViewCanvas} from './parts/canvas'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <ToolBar />
      <ViewCanvas />
    </div>
  )
}

export default App