"use client";


import { FontAwesomeIcon }
    from "@fortawesome/react-fontawesome";


import {
    faStar,
    faCartShopping
}
    from "@fortawesome/free-solid-svg-icons";



export default function ProductCard({ product }) {


    return (


        <div

            className=" bg-techdark border border-gray-700 rounded-xl overflow-hidden group hover:-translate-y-2 transition "
        >
            <div className=" h-52 flex items-center justify-center bg-white ">
                <img
                    src={product.image}

                    alt={product.name}

                    className=" h-full object-contain " />
            </div>
            <div className="p-5">
                <h3 className=" font-semibold h-14 ">
                    {product.name}
                </h3>
                <div className="text-yellow-400 my-2 ">
                    {
                        [...Array(product.rating)].map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStar}
                            />))}
                </div>
                <div>
                    <span className=" text-techorange text-xl font-bold ">
                        ৳{product.price}
                    </span>
                    <br />
                    <span className=" line-through text-gray-400 text-sm ">
                        ৳{product.oldPrice}
                    </span>
                </div>
                <button className=" mt-4 w-full bg-techorange py-2 rounded font-bold hover:bg-orange-500 ">
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add Cart
                </button>
            </div>
        </div>
    )
}