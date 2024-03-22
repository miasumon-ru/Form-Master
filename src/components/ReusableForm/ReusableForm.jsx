

const ReusableForm = ({ formTitle, submitBtnText='Submit', handleSubmit, children}) => {


    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name : e.target.name.value,
            email : e.target.email.value
        }
        handleSubmit(data)
    }

   
    return (
        <div>

            <h3>{children}</h3>

            <form onSubmit={handleLocalSubmit} >

                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value={submitBtnText} />



            </form>

        </div>
    );
};

export default ReusableForm;