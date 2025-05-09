export default function DessertItem() {
    return(
        <div className="dessert">
        <div className="img-dessert-div">
          <img className="img-dessert" src="\images\image-waffle-tablet.jpg" alt="dessert" />

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
    )
}