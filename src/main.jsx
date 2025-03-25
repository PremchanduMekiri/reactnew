import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const mobile1={
      imageLink :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/x/w/-original-imagg7zqqywe5hjk.jpeg?q=70",
      rediLink:"https://www.flipkart.com/oppo-k12x-5g-45w-supervooc-charger-in-the-box-breeze-blue-128-gb/p/itma30cb38861d4c?pid=MOBH2Q4PN6FWZCGV&lid=LSTMOBH2Q4PN6FWZCGVPMAT2I",
      name:" iqoo Z6 lite 5",
      rating:"4.2",
      ratingp:"14,04,384 ratings | 3404 reviews",
      ramrom:"6gb || 128gb ram",
      screen:"17 cm ",
      camera:"50 Mp",
      battery:"5000 mah"
      }
const mobile2={
  imageLink :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/x/a/z9-lite-5g-i2306-iqoo-original-imah3fdtbjbvhh55.jpeg?q=70",
  rediLink:"https://www.flipkart.com/iqoo-z9s-5g-onyx-green-128-gb/p/itmd0cd60e21a46f?pid=MOBH46H9EUYA54HN&lid=LSTMOBH46H9EUYA54HNR1BDRI&marketplace=FLIPKART&cmpid=content_mobile_21662510540_x_8965229628_gmc_pla&tgi=sem,1,G,11214002,x,,,,,,,c,,,,,,,&cmpid=content_21662510540_gmc_pla&gad_source=1&gclid=Cj0KCQjwhYS_BhD2ARIsAJTMMQYP1VfdTwzV_yme_xOH9SX4fEzQ6Dfy3WUWUNtJmE08CvYxQsZol2AaAt7hEALw_wcB",
  name:"iqoo Z9 lite 5g",
   rating:"4.7",
    ratingp:"14,04,384 ratings | 3404 reviews",
    ramrom:"8gb || 256gb ram",
    screen:"17.65 cm ",
    camera:"108 Mp",
    battery:"6000 mah"
}
const mobile3={
  imageLink :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/y/k/-original-imah4t2mazqcnkrh.jpeg?q=70",
  rediLink:"https://www.flipkart.com/realme-9-pro-5g",
  name:"realme 9 pro 5g",
   rating:"4.9",
      ratingp:"14,04,384 ratings | 3404 reviews",
      ratingp:"14,04,384 ratings | 3404 reviews",
      ramrom:"8gb || 256gb ram",
      screen:"17.65 cm ",
      camera:"108 Mp",
      battery:"6000 mah"
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <h2>welcome to flipkart</h2>
    <App mobileData={mobile1} />
    <App mobileData={mobile2}/>
    <App mobileData={mobile3}/>
   
  </StrictMode>,
)
