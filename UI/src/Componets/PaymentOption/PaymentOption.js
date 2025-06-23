import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { orderapi } from '../../Api_url';

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentMode, setPaymentMode] = useState('QR');

  const placeOrder = async () => {
    const orderData = {
      userId: localStorage.getItem('_id'),
      name: localStorage.getItem('name'),
      mobile: localStorage.getItem('mobile'),
      address: localStorage.getItem('address'),
      cake: state.cake,
      weight: state.weight,
      quantity: state.quantity,
      message: state.message,
      total: state.total,
      paymentMode: paymentMode
    };

    await axios.post(orderapi + 'place', orderData);
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Select Payment Method</h3>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              value="QR"
              checked={paymentMode === 'QR'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <label className="form-check-label">Pay via QR Code</label>
          </div>
          {paymentMode === 'QR' && ( <div className="text-center">
      <h3>Scan this QR to Pay</h3>
      <img src="/assets/images/qr.jpg" alt="QR Code" style={{ width: '250px' }} />
    </div>
           
          )}

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              value="COD"
              checked={paymentMode === 'COD'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <label className="form-check-label">Cash on Delivery (COD)</label>
          </div>

          <button className="btn btn-success w-100" onClick={placeOrder}>
            Confirm & Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;

