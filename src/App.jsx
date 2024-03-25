
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data =>{
    
    console.log('sign up data : ', data)
}

const handleUpdateProfile = data =>{

  console.log('profile data ', data)
}



  return (
    <>
     
      <h1>Vite + React</h1>

      {/* <SimpleForm></SimpleForm> */}

      {/* <StatefulForm></StatefulForm> */}

      {/* <RefForm></RefForm> */}

      {/* <HookForm></HookForm> */}

      <ReusableForm handleSubmit={handleSignUpSubmit} formTitle= {'Sign Up'} submitBtnText = 'Update' >
        <div>
          <h2> Sign Up </h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleUpdateProfile} formTitle= {'Profile Update'}>
      <div>
          <h2> Update Profile Data </h2>
          <p>Always keep your profile Update </p>
        </div>
      </ReusableForm>

      <Grandpa></Grandpa>

     
    </>
  )
}

export default App
