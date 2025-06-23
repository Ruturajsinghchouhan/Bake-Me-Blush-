import './MyOrders.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderapi } from '../../Api_url';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const userId = localStorage.getItem('_id');

  useEffect(() => {
    axios
      .get(`${orderapi}orders?userId=${userId}`)
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.error('Order fetch error:', err);
        setError('Failed to load orders.');
      });
  }, [userId]);

  return (
    <div className="my-orders-wrapper">
      <h2 className="my-orders-title">My Orders</h2>

      {error ? (
        <p className="error-text">{error}</p>
      ) : orders.length === 0 ? (
        <p>You have not placed any orders yet.</p>
      ) : (
        <table className="my-orders-table">
          <thead>
            <tr>
              <th>Cake</th>
              <th>Weight</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.cake}</td>
                <td>{order.weight}</td>
                <td>{order.quantity}</td>
                <td>₹{order.total}</td>
                <td>{order.paymentMode}</td>
                <td className={order.status === 'Delivered' ? 'status-delivered' : 'status-pending'}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyOrders;
