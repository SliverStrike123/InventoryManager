import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../App.css'
import AddOrderGUI from './addorder';


function Orders(){
    const [showAddOrder, setShowAddOrder] = useState(false)

    const handleClick = () => {
        setShowAddOrder(true)
    }

    const handleReturn = () => {
        setShowAddOrder(false)
    }

    if(showAddOrder){
        return <AddOrderGUI onReturn={handleReturn}/>
    }
        return <div className='Page'>
        Orders
        <div>
        <button className='Button' onClick = { handleClick }>Hello</button></div>
    </div>
}


export default Orders;