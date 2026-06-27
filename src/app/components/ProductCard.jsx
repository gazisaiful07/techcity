"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="bg-techdark border border-gray-700 rounded-xl overflow-hidden group hover:-translate-y-2 transition duration-300 cursor-pointer">
                {/* Product Image */}
                <div className="h-52 flex items-center justify-center bg-white">
                    <img src={product.image} alt={product.name} className=" h-full object-contain" />
                </div>
                <div className="p-5">
                    <h3 className=" font-semibold h-14 text-white ">
                        {product.name}
                    </h3>
                    {/* Rating */}
                    <div className=" text-yellow-400 my-3 ">
                        {[...Array(product.rating)].map((_, index) =>
                            (<FontAwesomeIcon key={index} icon={faStar} />))}
                    </div>
                    {/* Price */}

                    <div>
                        <span className="text-techorange text-xl font-bold ">
                            ৳ {product.price}
                        </span>
                        <br />
                        <span className="line-through text-gray-400 text-sm ">
                            ৳ {product.oldPrice}
                        </span>
                    </div>
                    {/* Button */}
                    <button onClick={(e) => e.preventDefault()} className=" cursor-pointer mt-4 w-full bg-techorange py-2 rounded font-bold hover:bg-orange-500 transition " >
                        <FontAwesomeIcon icon={faCartShopping} />
                        {" "}
                        Add Cart
                    </button>
                </div>
            </div>
        </Link>
    )
}