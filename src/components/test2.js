import React, { useState }  from 'react';

function TestPage(){
    const [integer, setinteger] = useState(0)

    return <div>
        <p>Current Value: {integer}</p>
        <button className="Button" onClick={()=>setinteger(integer+1)}>Click to increase!</button>
    </div>
}


export default TestPage;
