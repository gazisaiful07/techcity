"use client";

import { useCartStore } from "../../../store/cartStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function AddToCartButton({ product }) {
    const addToCart = useCartStore(
        (state) => state.addToCart);

    return (

        <button onClick={() => addToCart(product)} className="bg-techorange px-8 py-3 rounded-lg font-bold hover:bg-orange-500 cursor-pointer">

            <FontAwesomeIcon icon={faCartShopping} />
            {" "}
            Add Cart
        </button>
    )

}