import React from 'react'

const Time = ()=> {
        
        let data = new Date()
        const minutes = data.getMinutes()
        const time = data.getTime()
        
        // to store am or pm
        let timePA =0
        const hours = data.getHours() % 12
        let timeOfDay = 0
        
        if ( hours < 12)     {
            timeOfDay = 'Good Morning'
            timePA = 'PM'
        }
        else{
            timeOfDay = 'Good Night'
            timePA = 'AM'
        }
    
        return( timeOfDay, timePA)
}

export default  Time



/*      ADD THIS TO INDEX.JS FILE

import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';

import Time from "./components/Time";
let data = new Date()
const hours = data.getHours() % 12

var rootNode = document.getElementById("root");

const variable = 222
let style ={
    color: 'red',
    'background-color': 'lightgreen'
};

ReactDOM.render(
                        <h1 style={style}>
                            <Time/> {`   Time -------> ${hours} : ${data.getMinutes()}`}
                        </h1>
                
                ,rootNode)  
                



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


*/