import { Link } from "react-router-dom";
import cart from "../assets/cart.png";
export const CartWidget = () => {
    return (
        <Link to="/cart">
            <img src={cart} height={20} />4
        </Link>
    );
};
