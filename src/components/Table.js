import React from 'react'
import Body from './Body'
import Header from './Header'

function Table() {
	return (

		<table className = "grid" id="table">
            <caption>Таблица</caption>
            <Header/>
            <Body/>
        </table>
	)
}

export default Table