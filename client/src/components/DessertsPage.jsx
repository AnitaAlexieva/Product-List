import { useEffect, useState } from "react";
import DessertItem from "./DessertItem";
import requester from "../utils/requester";

export default function DessertsPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [desserts, setDesserts] = useState({})

  useEffect(() =>{
      requester('/data.json')
      .then(res => setDesserts(res))
  },[])

  const handleConfirm = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const isAddedInfo = (isAdded) =>{
    setIsAdded(isAdded)
  }

  return (
    <div className="app-wrapper">
      {showDialog && (
        <div className="modal-overlay">
          <div className="confirmation-dialog">
            <img src="\images\icon-order-confirmed.svg" alt="" />
            <h2 className="h2-conf">Order Confirmed</h2>
            <p className="p-conf">We hope you enjoy your food!</p>
            <div className="full-cart-confirmed">
              <h4 className="h4-conf">Classic Tiramisu</h4>
                
              <div className="cart-descr-confirmed">
                  <img className="confirmed-dessert" src="\images\image-brownie-desktop.jpg" alt="" />
                  <div className="item-quantity">
                    <p className="quantity">2x</p>
                    <p className="one-price">@ $5.50</p>
                  <p className="all-price-conf">$11.00</p>
                  </div>
                </div>
            </div>
            <div className="order-total-div-conf">
              <p className="order-total-p">Order Total</p>
              <h2>$46.50</h2>
            </div>
            <button onClick={closeDialog} className="close-dialog-btn">Start New Order</button>
              </div>
          </div>
        
      )}

      <div className="app-content">
        <div className="desserts-container">
          <h1>Desserts</h1>
          <div className="all-desserts">
            <DessertItem desserts={desserts} onAddedDessert={isAddedInfo} />
            <DessertItem />
            <DessertItem />
            <DessertItem />
          </div>
        </div>

        <div className="cart-container">
          <h3>Your Cart (0)</h3>
          {isAdded ? (
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
              <div className="close-mark-div">
                <img className="close-mark" src="\images\icon-remove-item.svg" alt="close" />
              </div>
            </div>

            <div className="order-total-div">
              <p>Order Total</p>
              <h2>$46.50</h2>
            </div>

            <div className="natural">
              <img src="\images\icon-carbon-neutral.svg" alt="" />
              <p>This is a <span>carbon-natural</span> delivery</p>
            </div>

            <div className="confirm-div">
              <button className="confirm-btn" onClick={handleConfirm}>Confirm Order</button>
            </div>
          </div>
          ):(
           <div className="cart">
              <div className="emty-cart">
              <img src="\images\illustration-empty-cart.svg" alt="emty" />
              <p>Your added items will appear here </p>
              </div>
            </div>
          )}
         
        </div>
      </div>
    </div>
  );
}
