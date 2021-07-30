import { Button, Form, } from "react-bootstrap"
import { useState } from "react";
import Rating from "./Rating";
const Filters = () => {

    const [rate, setRate] = useState(2)
    return (
        <div className="filters">
         <span className="title">Filters</span>
         <span>
             <Form.Check
                 inline
                 label="Ascending"
                 name="group"
                 type="radio"
                 id={'inline-1'}
             />
         </span>
         <span>
             <Form.Check
                 inline
                 label="descending"
                 name="group"
                 type="radio"
                 id={'inline-2'}
             />
         </span>   
         <span>
             <Form.Check
                 inline
                 label="Include out of stock"
                 name="group"
                 type="checkbox"
                 id={'inline-3'}
             />
         </span>   
         <span>
             <Form.Check
                 inline
                 label="Fast-DELIVERY"
                 name="group"
                 type="checkbox"
                 id={'inline-4'}
             />
         </span>  
         <span>
             <label style={{paddingRight:10}}>Rating</label>
             <Rating 
             rating={rate} 
             onClick={(i)=>setRate(i+1)}
             style={{cursor:'pointer'}}/>
                      </span> 
         <Button variant ="light">Clear filter</Button>
        </div>
    )
}

export default Filters
