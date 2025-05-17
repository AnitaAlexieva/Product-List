import { useState } from "react"

export default function DessertItem({onAddedDessert}) {
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(1);

  const smallCount = () =>{
    if(count > 1){
      setCount(count - 1)
     
    }else{
      setCount(0)
      setIsAdded(false)
    }
  }


    return(
        <div className="dessert">
        <div className="img-dessert-div" >
          <img className={isAdded ? "img-dessert selected":"img-dessert"} src="\images\image-waffle-tablet.jpg" alt="dessert" />

        </div>
       
        {isAdded ? (
           <div className="button-added-div">
          <div className="added-btn">
            <button className="operation" onClick={smallCount}>-</button>
            <p>{count}</p>
            <button className="operation" onClick={() => setCount(count + 1)}>+</button>
          </div>
          </div>
        ):(
           <div className="button-add-div">
          <img src="\images\icon-add-to-cart.svg" alt="add-to-cart" />
          <button className="add-cart-btn" onClick={() => {setIsAdded(true); setCount(1); onAddedDessert(true)}}>Add to Cart</button>
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