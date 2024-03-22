import useInputState from "../../useInputState";



const HookForm = () => {

    // state 

    // const [name, handleNameChange] = useInputState('rojonibabu')
    // const [email, handleEmailChange] = useInputState ('rojoni@sojoni.com')

    const nameChange = useInputState('rojoni')
    const emailChange = useInputState('rojoni@gmail.com')

    console.log(nameChange)
    console.log(emailChange)

    // handle event


    const handleSubmit = e =>{
        e.preventDefault()
        // console.log(name.target.value)
        // console.log(email.target.value)

        console.log(nameChange.value)
        console.log(emailChange.value)



    }
    return (
        <div>

            <h2>HookForm</h2>

            <form onSubmit={handleSubmit} >

                {/* <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input type="submit" value="Submit" /> */}

                <input {...nameChange} type="text" name="name" />
                <br />
                <input {...emailChange}  type="email" name="email" />
                <br />
                <input type="submit" value="Submit" />



            </form>

        </div>
    );
};

export default HookForm;