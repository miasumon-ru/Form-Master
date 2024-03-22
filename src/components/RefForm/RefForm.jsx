import { useEffect, useRef } from "react";



const RefForm = () => {


    // hook
    const nameRef = useRef(null)
    const emailRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    },[])
    

    // handle event
    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }


    return (
        <div>
            <h2>RefForm -- Uncontrolled Element by using useRef</h2>

            <form onSubmit={handleSubmit} >

                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" defaultValue={'rojoniandsojoni@gmailcom'} id="" />
                <br />
                <input type="submit" value="Submit" />



            </form>


        </div>
    );
};

export default RefForm;