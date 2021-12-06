// import React from 'react';
// import ReactDOM from 'react-dom';
// // import {firebase , FieldValue} from "./lib/firebase"
// import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import ContextProvider from './context/firebase';

// ReactDOM.render(
//     <ContextProvider>
//         <App />
//     </ContextProvider>
// ,document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';


ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


