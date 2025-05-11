import { useState } from "react"

export default function DessertItem() {
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(0);

  const smallCount = () =>{
    if(count > 0){
      setCount(count - 1)
     
    }else{
      setCount(0);
      
    }
  }

    return(
        <div className="dessert">
        <div className="img-dessert-div">
          <img className="img-dessert" src="\images\image-waffle-tablet.jpg" alt="dessert" />

        </div>
       
        {isAdded ? (
           <div className="button-add-div">
          <div className="added-btn">
            <button onClick={smallCount}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          </div>
        ):(
           <div className="button-add-div">
          <img src="\images\icon-add-to-cart.svg" alt="add-to-cart" />
          <button className="add-cart-btn" onClick={() => setIsAdded(true)}>Add to Cart</button>
          </div>
        )}
        
        <div className="dessert-description">
          <h4 className="simple-name">Waffle</h4>
          <h3 className="whole-name">Waffle with Berries</h3>
          <p className="price-p">$6.50</p>  
        </div>
      </div>
    )
}