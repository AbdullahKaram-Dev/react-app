import {useState} from 'react';

export default function MyInput() {

    const [userName, setUserName] = useState('');


    function displayNameChanged(event) {
        return setUserName(event.target.value);
    }

    return (
        <div>
            <label>Please Enter Your Name: </label>
            <input value={userName} onChange={displayNameChanged}/>
        </div>
    );
}