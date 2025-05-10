import { useState } from "react"

export default function DessertItem() {
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(0);

  const smallCount = () => {
    if (count > 0) {
      setCount(count - 1)

    } else {
      setCount(0);

    }
  }

        </div>
        <div className="button-add-div">
        <img src="\public\images\icon-add-to-cart.svg" alt="add-to-cart" />
        <button className="add-cart-btn">Add to Cart</button>
        </div>
        <div className="dessert-description">
          <h4 className="simple-name">Waffle</h4>
          <h3 className="whole-name">Waffle with Berries</h3>
          <p className="price-p">$6.50</p>  
        </div>
      </div>
    </div>
  )
}