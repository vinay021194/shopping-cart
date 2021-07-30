import React from 'react'
import { Button, Container, Dropdown, FormControl, Nav, Navbar,Badge  }  from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';


const Header = () => {
  const{
    state:{cart},
    dispatch
  }= CartState();
    return (
    <Navbar bg="dark" variant="dark" style ={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/" >Shopping cart</Link>
            </Navbar.Brand>
            <Navbar.Text  className='Search'>
            <FormControl 
                style={{width:500}}
                placeholder = 'Search a product'
                className ="m-auto"
            />

            </Navbar.Text>
            <Nav>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <FaShoppingCart color="white" fontSize="25px"> </FaShoppingCart>

    <Badge>{cart.length}</Badge>
  </Dropdown.Toggle>

  <Dropdown.Menu style ={{minWidth:300}}>

  {cart.length > 0 ? (
   
<>
       {
         cart.map((prod)=>(
           <span className="cartItems" key={prod.id}>
             <img 
               src={prod.image}
               className="cartItemImg"
               alt= {prod.name}
             />
             <div className="cartItemDetail">
             <span>{prod.name}</span>
             <span>₹{prod.price.split(".")[0]}</span>

             </div>
             <AiFillDelete
               fontSize="20px"
               style={{cursor:"pointer"}}
               onClick={()=>
               dispatch({
                 type:"REMOVE_FROM_CART",
                 payload:prod,

               })
               }
             />
           </span>
         ))
       }
       <Link to="/cart">
       <Button style={{width:"95%",margin:"0,10px"}}>Go to cart</Button>

       </Link>
</>

  ):(<span style ={{padding: 10}}> Cart is Empty</span>)}
    
  </Dropdown.Menu>
</Dropdown>
            </Nav>
        </Container>
    </Navbar>
    );
};

export default Header
