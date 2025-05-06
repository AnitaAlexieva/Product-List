export default function DessertItem() {
    return(
        <div className="dessert">
        <div className="img-dessert">
          <img src="\images\image-waffle-tablet.jpg" alt="dessert" />
        </div>
        <button className="add-cart-btn"><img src="\public\images\icon-add-to-cart.svg" alt="add-to-cart" />Add to Cart</button>
        <div className="dessert-description">
          <h4>Waffle</h4>
          <h3>Waffle with Berries</h3>
          <p>$6.50</p>  
        </div>
      </div>
    )
}