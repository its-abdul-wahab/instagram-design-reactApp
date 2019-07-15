// import React from 'react'
// import Todoitem from './Todoitem';



// const TodoListApp = ()=>{
//    return(
//     <div className='todo-item'>
//           <Todoitem values= {{no:"1"}} />
//           <Todoitem values= {{no:"2"}} />
//           <Todoitem values= {{no:"3"}} />
//           <Todoitem values= {{no:"4"}} />
//           </div>
//    )
    
// }

// export default TodoListApp


import React from "react"
import Todoitem from "./Todoitem"

function TodoListApp() {
    return (
        <div className="contacts">
            <Todoitem 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <Todoitem 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <Todoitem
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <Todoitem
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
        </div>
    )
}

export default TodoListApp