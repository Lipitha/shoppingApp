import { useEffect, useState } from "react";

function Cart({cartDetails}){
    const [totalPrice, setTotalPrice] = useState(0);
    // console.log(cartDetails);
    const calculateTotalPrice =()=>{
        const totalValue= cartDetails?.reduce((sum,currentProduct)=>{
            sum = sum + currentProduct.price;
            return sum;
        },0)
        setTotalPrice(totalValue);
    }//sum is 0

    useEffect(()=>{
        calculateTotalPrice();
    })

    return(
        <div>
            <h2>Cart Details</h2>
            <h3>Total price: ${totalPrice} </h3>
            <div>
               {cartDetails.map((cartItem)=>{
                return(
                    <div key={cartItem.id} style={{border:"1px solid lightgreen",borderRadius:"6px"}}>
                        <h4>{cartItem.title}</h4>
                        <img src={cartItem.image} alt="productImg" style={{width:"30px", height:"30px"}}/>
                        <h4>{cartItem.price}</h4>
                        <button>+</button>
                        <button>-</button>
                    </div>
                )
               })}
            </div>
        </div>
    )
}
export default Cart;