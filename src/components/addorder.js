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

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        width: '100%',
    };

    return <div>
        <h1>This is an add order page</h1>
        <form onSubmit={(event) => {
            event.preventDefault()
            setShowPopup(true)
            event.target.reset()
        }}>
            <label for="InvoiceID">Invoice ID: </label>
            <input type="text" id="InvoiceID" name="InvoiceID" /><br /><br />
            <div style={containerStyle}>
                <input type="submit" value="Submit" />
                <button onClick={onReturn}>Back</button>
            </div>
        </form>
        <div className={`Popup-wrapper ${showPopup ? 'show' : ''}`}>
            <PopUp
                message="Submitted"
                onClose={() => setShowPopup(false)}
            />
        </div>
    </div>
}

export default AddOrderGUI