import './App.css'
import BestBurgur from './assets/Components/BestBurgur'
import BigBurgur from './assets/Components/BigBurgur'
import Checf from './assets/Components/Checf'
import Footer from './assets/Components/Footer'
import Freee from './assets/Components/Freee'
import Home from './assets/Components/Home'
import Package from './assets/Components/Package'
import Statics from './assets/Components/Statics'
import Update from './assets/Components/Update'
import '../src/assets/Pokemon/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './assets/Pokemon/Main'

export default function App() {
  return (
    <div className='h-lvh w-full'>
      <Router>
        <Routes>
          {/* Route for displaying all components */}
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Checf />
                <BestBurgur />
                <BigBurgur />
                <Statics />
                <Package />
                <Freee />
                <Update />
              </>
            } 
          />

          {/* Route for displaying main components from assets */}
          <Route 
            path="/main" 
            element={
              <>
                <Main/>
                {/* <BestBurgur />
                <BigBurgur />
                <Update /> */}
              </>
            } 
          />
        </Routes>
      </Router>

      {/* Footer visible on all routes */}
      <Footer />
    </div>
  )
}
