import { useDispatch, useSelector } from "react-redux";
import ItemList from "./cartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="cart text-center m-4 p-4">
            <div className="flex pb-6 justify-center">
                <h1 className="text-2xl ml-48 font-bold">Cart List</h1>
                <button
                    className="m-2 p-1 px-2 ml-64 bg-gray-500 text-white rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
            { cartItems.length === 0 && <h1>Cart is Empty . Add items to the Cart</h1> }
            <div className="w-6/12 m-4 m-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    );
}

export default Cart;
