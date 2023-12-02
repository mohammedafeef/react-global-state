import { ToDoInput } from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'

function App() {

  return (
    <div className="flex w-screen h-screen items-center flex-col pt-4 bg-[#DED0B6]">
      <ToDoInput/>
      <ToDoList/>
    </div>
  )
}

export default App
