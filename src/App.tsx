import './App.css'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {app} from "./firebase";
import Signups from './Pages/Signup';
import Signins from './Pages/Signin';

// import { getDatabase, ref, set } from 'firebase/database';
// const db =getDatabase(app);
const auth = getAuth(app);
const Signup=()=>{
  createUserWithEmailAndPassword(auth,'faisaljawed2000@gmail.com','faisal.123').then((value)=>console.log(value))
}
function App() {
  // const data=()=>{
  //   set(ref(db,"users/faisal"),{
  //     id:1,
  //     name:"Faisal",
  //     age:21,
  //   })
  // }
  // const Putdata=()=>{
  //   set(ref(db,"users/umer"),{
  //     id:0,
  //     name:"Umer",
  //     age:21,
  //   })
  // }
  return (
    <>
     <h1>Firebase React App</h1>
     {/* <button onClick={data}>put Data</button>
     <button onClick={Putdata}>Put Another Data</button> */}
     <button onClick={Signup}>Put Another Data</button> 
     <Signups/>
     <Signins/>
     
    </>
  )
}

export default App
