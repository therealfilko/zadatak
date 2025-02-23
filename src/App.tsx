import './App.css'
import TaskList from './components/common/TaskList'

function App() {
    return (
        <>
            <h1 className='text-4xl font-medium m-4 mb-6'>Aufgaben für heute</h1>
            <TaskList>
            </TaskList>
        </>
    )
}

export default App
