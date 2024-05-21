
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

export default function App() {
  return (
    <div className='h-lvh w-full '>
      <Home className=""></Home>
      <Checf></Checf>
      <BestBurgur></BestBurgur>
      <BigBurgur></BigBurgur>
      <Statics></Statics>
      <Package></Package>
      <Freee></Freee>
      <Update></Update>
      <Footer></Footer>

    </div>

  )
}

