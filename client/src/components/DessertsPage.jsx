import DessertItem from "./DessertItem";

export default function DessertsPage() {
    return(
        <div className="app-wrapper">
        <div className="app-content">
          <div className="desserts-container">
            <h1>Desserts</h1>
            <div className="all-desserts">
            <DessertItem/>
            <DessertItem/>
            <DessertItem/>
            <DessertItem/>

            </div>
          </div>
          <div className="cart-container">
            <h3>Your Cart (0)</h3>
            <div className="cart">
              {/* <div className="emty-cart">
              <img className="empty-img" src="\images\illustration-empty-cart.svg" alt="emty" />
              <p className="empty-p">Your added items will appear here </p>
              </div> */}
            </div>
            <div className="cart-2">
              <div className="full-cart">
                <div className="cart-descr">
                    <h4>Classic Tiramisu</h4>
                    <div className="item-quantity">
                      <p className="quantity">2x</p>
                      <p className="one-price">@ $5.50</p>
                      <p className="all-price">$11.00</p>
                    </div>
                </div>
                <div className="close-mark">
                  <img src="\images\icon-remove-item.svg" alt="close" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}