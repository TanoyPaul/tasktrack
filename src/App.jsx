import { Provider } from 'react-redux'
import './App.css'
import InputBox from './components/InputBox'
import { store } from './store/store'
import AllTodos from './components/AllTodos'


function App() {

  return (
    <Provider store={store}>
    <h1 className='text-white my-8 text-3xl tracking-widest font-semibold'>TaskTrack</h1>
    <InputBox />
    <AllTodos />
    </Provider>
  )
}

export default App
