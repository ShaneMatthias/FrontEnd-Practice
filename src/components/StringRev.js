import { useState } from 'react';
import React from 'react';

function StingRev () {

    const [string, setString] = useState('');
    const [revString, setRevString] = useState('');

    const handleInputChange = (data) => {
        setString(data.target.value);
    }

    const reverseString = () => {
        // let str = string.toLowerCase().split('').reverse().join('');
        let str = '';
        for (let char of string) {
            str = char + str;
        }

        setRevString(str);
    }

    return(
        <div>
            <h1>Reverse a string</h1>
            <input value={string} onChange={handleInputChange}/>
            <button onClick={reverseString}>Reverse</button>
            <p>{revString}</p>
        </div>
    )
}

export default StingRev;