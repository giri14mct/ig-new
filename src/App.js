import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css'
import StationData from './StationData'
import Loading from './Loading'
function App() {
  const [content, setContent] = useState(null)
  const api_url = 'https://labview-with-cloud-default-rtdb.asia-southeast1.firebasedatabase.app/dataupdated.json'

  const logo_url = 'https://www.dsij.in/Portals/0/EasyDNNNews/15845/images/img-EeBQGqgVAAU9vsN-600-600-p-L-97.png'

  useEffect(() => {
    let result
    const fetchContent = async () => {
      result = await axios.get(api_url);
      setContent(result.data)
    }

    

    //Setting the interval
    const update = setInterval(() => {


          fetchContent()
    }, 1000)

    //clearing the interval
    return () => {
      clearInterval(update)
    }
  }, [])

  // console.log(content)

  return (
    <>
      <nav>
        <div className="navBarContainer">
          <img className='navBarLogo' src={logo_url} alt='company logo' />
          <h1 className='title'>Igarashi Motor </h1>
        </div>
      </nav>
      <section>
        <div className='stations'>
          <div className='station'>
            <h1>Station-1</h1>
            {content === null ? <Loading /> : <StationData data={content[0]} />}
          </div>
          <div className='station'>
            <h1>Station-2</h1>
            {content === null ? <Loading /> : <StationData data={content[1]} />}
          </div>
          <div className='station'>
            <h1>Station-3</h1>
            {content === null ? <Loading /> : <StationData data={content[2]} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default App;

