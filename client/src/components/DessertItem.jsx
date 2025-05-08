export default function DessertItem() {
    return(
        <div className="dessert">
        <div className="img-dessert">
          <img src="\images\image-waffle-tablet.jpg" alt="dessert" />
        <div className="button-add-div">
        <img src="\public\images\icon-add-to-cart.svg" alt="add-to-cart" />
        <button className="add-cart-btn">Add to Cart</button>
        </div>
        <div className="dessert-description">
          <h4>Waffle</h4>
          <h3>Waffle with Berries</h3>
          <p>$6.50</p>  
        </div>
      </div>
    )
}