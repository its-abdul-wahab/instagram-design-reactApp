// import React from 'react'

// const Todoitem = (props)=>{
    
//     return(
//         <div className='todo-list'>
           
//             <input type='checkbox'/>        
//             <p>text no {props.values.no} </p>

//             <input type='checkbox'/>        
//             <p>text no {props.values.no} </p>
//             <input type='checkbox'/>     

          


            
//         </div>
//     );
// }

// export default Todoitem


import React from "react"

function Todoitem(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <input type='checkbox'  />{props.contact.name}
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default Todoitem