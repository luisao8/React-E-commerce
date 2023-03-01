import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    const styles = {
        container: {
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }
      };

    return (
        <>
            <div style={styles.container}>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            </div>
            <hr></hr>
        </>
    )
}

export default CartProduct;