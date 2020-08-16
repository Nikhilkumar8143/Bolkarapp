import React from 'react'

function DataResults(props){

    const handleButton = e => props.clickHandler(e)

    return <li key={props.i} > <div className='component-data-result-row'> 
       <a  onClick={handleButton}>  <img id={props.data} className="playimg" src="/img/play.png" alt="play"/>
       </a>
          {props.data}   </div></li>
}

export default DataResults;