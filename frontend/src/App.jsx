import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Update from './components/Update'
import Create from './components/Create'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route exact path="/" element={<App/>}/> */}
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
