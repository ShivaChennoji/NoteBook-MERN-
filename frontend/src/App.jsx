import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './components/navbar'
import { Noteslist } from './components/noteslist'
import { Createnotes } from './components/createnotes'
import { Viewnotes } from './components/Viewnotes'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Noteslist />
      </div>
    ),
  },
  {
    path: "/notes",
    element: (
      <div>
        <Navbar />
        <Createnotes />
      </div>
    ),
  },
  {
    path: "/editnotes/:id",
    element: (
      <div>
        <Navbar />
        <Viewnotes />
      </div>
    ),
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
