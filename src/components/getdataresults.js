import React from 'react';
import DataResults from './dataresults'

function GetDataResults(props){
    let i=0;
    const handleButton = e => props.clickHandler(e)
    return    <ul>
        {
         props.data.map(data =>{ 
           i++
        return <DataResults i={i} data={data} clickHandler={handleButton}/>
    })     
        }
        </ul> 
}

export default GetDataResults;