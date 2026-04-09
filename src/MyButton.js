import {useState} from 'react';

export default function MyButton() {
    const [name, setName] = useState('Abdullah');


    function buttonClicked() {
        (name === 'Abdullah') ? setName('Karam') : setName('Abdullah');
    }

    return (<div>
        <button onClick={buttonClicked}>Click me</button>
        <h1>{name}</h1>
    </div>);
}


