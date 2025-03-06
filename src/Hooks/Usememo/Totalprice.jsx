import React, { useState,useMemo} from "react";


function Shoppingcart(){
    const[cartItems,setcartitems]=useState([{id:1, name:'A',price:2,quantity:3},{id:2, name:'B',price:5,quantity:4},{id:3, name:'C',price:2,quantity:3}]);

    const[userprofile,setuserprofile]=useState({name:""});

    //usememo to calculate total price based on cartitems
    const totalprice=useMemo(()=>{
        console.log("calculating totalprice");
        return cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);
    },[cartItems]); //recalculates only when cartitems change

    //handle item quantity change 
    // const updatequantity=(id,quantity)=>{
    //     setcartitems(previtems=>previtems.map(item=>item.id===id?{item,quantity}:item));
    // };

    // //handle updating user profile
    // const updateprofilename=(newname)=>{
    //     setuserprofile(prevprofile=>({prevprofile,name:newname}));
    // };

    return(
        <div>
            <h3>shopping cart</h3>
            <p>Total price:${totalprice}</p>
            <input type="text" placeholder="update profile name" value={userprofile} onChange={(e)=>setuserprofile(e.target.value)}/>
            {/* <div>
                <h3>user profile</h3>
                <p>name:{userprofile.name}</p>
                <button onClick={()=>updateprofilename('kavi')}change name></button>
            </div>


            <div>
                <h3>cartitems</h3>
                <ul>
                    {cartItems.map(item=>(
                        <li key={item.id}>
                            {item.name}-${item.price}*{item.quantity}
                            <button onClick={()=>updatequantity(item.id, item.quantity+1)}>Increase quantity</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Total price:${totalprice}</h3>
            </div> */}
        </div>
    )
}

export default Shoppingcart;