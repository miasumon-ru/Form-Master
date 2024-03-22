import { useState } from "react";



const StatefulForm = () => {

    // state 

    const [email, setEmail] = useState(null)

    const [password, setPassword] = useState(null)

    const [name , setName ] = useState ('type a name with capital letter')

    const [error, setError] = useState('')

    // handle Event
    const handleEmailChange = e => {

        setEmail(e.target.value)
     
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password, name)

        if(password.length < 6){
            setError('password must be more than six caracter')
        }
    }


    return (
        <div>

            <h2>Stateful Form</h2>

            <form onSubmit={handleSubmit} >

                <input onChange={handleNameChange} value={name}  type="text" name="name" placeholder="Name " />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder="Email"/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />


                {
                    error && <p>{error}</p>
                }



            </form>

        </div>
    );
};

export default StatefulForm;