import {useState} from 'react';

export default function MyForm() {
    const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
    });
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(formInputs);
        }}>
            <label>Please Enter Your Name: </label>
            <input value={formInputs.name} onChange={(event) => {
                setFormInputs({name: event.target.value,email: formInputs.email});
            }} type="text" placeholder="Enter Your Name"/>
            <hr/>
            <label>Please Enter Your Email: </label>
            <input value={formInputs.email} onChange={(event) => {
                setFormInputs({email: event.target.value,name: formInputs.name});
            }} type="email" placeholder="Enter Your Email"/>
            <hr/>
            <button>Submit</button>
        </form>
    );
}