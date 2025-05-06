import DessertItem from "./DessertItem";

export default function DessertsPage() {
    return(
        <div className="app-wrapper">
        <div className="app-content">
          <div className="desserts-container">
            <h1>Desserts</h1>
            <DessertItem/>
          </div>
          <div className="cart-container">
            <h3>Your Cart (0)</h3>
            <div className="cart">
              <img src="\images\illustration-empty-cart.svg" alt="emty" />
              <p>Your added items will appear here </p>
            </div>
          </div>
        </div>
    </div>
    )
}