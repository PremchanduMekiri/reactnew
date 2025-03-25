import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({mobileData={}}) {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div className='mobile'>
        <div id='immg1'>
          <img src={mobileData.imageLink }alt="mobile image"></img>
        </div>
        <div>
          <div className='iqoo'>
         <a id="link" href={mobileData.rediLink}>
         
       {mobileData.name}
         </a>
         </div>
        <div class="tabs">
          <button>{mobileData.rating || "N/A"}</button>
          <p>{mobileData.ratingp || "no reviews "}</p>
          
        </div>
        <div>
          <ul>
            <li>{mobileData.ramrom || "no specifics"}</li>
            <li>{mobileData.screen || "no specifics"}</li>
            <li>{mobileData.camera || "no specifics"}</li>
            <li>{mobileData.battery || "no specifics"}</li>
            <li> 1 year warranty</li>
          </ul>
        </div>
      </div>
      <div className='price'>
        <div className='pprice'>
          <h3>$12,450</h3>
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" alt="Flipkart Logo" id="flipkartlogo"></img>
        </div>
        <div>
          <p>only few lef</p>
          <p>free delivery </p>
          <p>bank offer</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
