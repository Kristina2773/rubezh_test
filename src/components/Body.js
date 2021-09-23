import React from 'react'
import Row from './Row'
import data from '../data'


function Body() {
    let mas = [];
    for (let i = 0; i<data.length; i++) {
        mas.push(<Row data={data[i]}/>)
    }
    //console.log('---', mas)
     return(mas)
}

export default Body