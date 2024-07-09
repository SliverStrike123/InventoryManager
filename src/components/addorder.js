import React, { useState } from 'react'
import '../App.css'

const PopUp = ({ message, onClose }) => {
    return (
        <div className="Popup-overlay">
            <div className="Popup-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};



function AddOrderGUI({ onReturn }) {
    const [showPopup, setShowPopup] = useState(false);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ id: '', amount: '', cost: '' });

    const HandleOrderSubmit = (event) => {
        event.preventDefault()
        setShowPopup(true)
        event.target.reset()
    }
    const handleAddItem = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setNewItem({ id: '', amount: '', cost: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({ ...prevItem, [name]: value }));
    };

    const handleAddItemSubmit = (e) => {
        e.preventDefault();
        if (newItem.id && newItem.amount && newItem.cost) {
          setItems(prevItems => [...prevItems, newItem]);
          handleClosePopup();
        }
      };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        width: '100%',
    };

    return <div>
        <h1>This is an add order page</h1>
        <form onSubmit={HandleOrderSubmit}>
            <label for="InvoiceID">Invoice ID: </label>
            <input type="text" id="InvoiceID" name="InvoiceID" /><br /><br />
            <div className="Item-list-container">
                Item List
                <ul className="Item-list">
                    {items.map((item, index) => (
                        <li key={index}>
                            ID: {item.id}, Amount: {item.amount}, Cost: ${item.cost}
                        </li>
                    ))}
                </ul>
                <button type="button" onClick={handleAddItem}>Add Item</button>
                
            </div>
            <div style={containerStyle}>
                <input type="submit" value="Submit" />
                <button type="button" onClick={onReturn}>Back</button>
            </div>
        </form>
        {showPopup && (
                    <div className="Popup-overlay">
                        <div className="Popup-content">
                            <h3>Add New Item</h3>
                            <form onSubmit={handleAddItemSubmit}>
                                <input
                                    type="text"
                                    name="id"
                                    value={newItem.id}
                                    onChange={handleInputChange}
                                    placeholder="Item ID"
                                    required
                                />
                                <input
                                    type="number"
                                    name="amount"
                                    value={newItem.amount}
                                    onChange={handleInputChange}
                                    placeholder="Amount"
                                    required
                                />
                                <input
                                    type="number"
                                    name="cost"
                                    value={newItem.cost}
                                    onChange={handleInputChange}
                                    placeholder="Cost per item"
                                    step="0.01"
                                    required
                                />
                                <button type="submit">Add</button>
                                <button type="button" onClick={handleClosePopup}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
        <div className={`Popup-wrapper ${showPopup ? 'show' : ''}`}>
            <PopUp
                message="Submitted"
                onClose={() => setShowPopup(false)}
            />
        </div>
    </div>
}

export default AddOrderGUI