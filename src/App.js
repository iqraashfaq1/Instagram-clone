// import React, { useContext, useEffect } from 'react'
// import { GlobalContext } from './context/firebase'


// const App = () => {
//   let {state , dispatch} = useContext(GlobalContext);
//   useEffect(function(){
//     dispatch({type : 'USERS' , payload : {
//       name : 'iqra',
//       email : 'email@gmail.com'
//     }})
   
//   },[])

//   useEffect(()=>{
//     console.log(state)
//   },[state.data])
//   return (
//     <div>
//   <h1>hello</h1>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { lazy ,Suspense } from 'react'
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes';

const Login = lazy (() => import ("./pages/login"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <Route path ={ROUTES.LOGIN} component={Login}/>
      </Switch>
      </Suspense>
    </Router>
  )
}

export default App
