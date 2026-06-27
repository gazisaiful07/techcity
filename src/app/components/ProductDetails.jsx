"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "./AddToCartButton";



export default function ProductDetails({ product }) {
    return (
        <div className=" container-custom py-10 max-w-375 mx-auto   shadow-lg dark:bg-slate-800 mt-10 px-10 border border-gray-700 rounded-xl ">
            <div className="grid md:grid-cols-2 gap-10 px-4">
                {/* Image */}
                <div className="bg-white rounded-xl h-112.5 flex justify-center items-center">
                    <img src={product.image} alt={product.name} className=" max-h-full object-contain " />
                </div>
                {/* Info */}
                <div className="">
                    <h1 className=" text-4xl font-bold mb-5 ">
                        {product.name}
                    </h1>
                    <div className=" text-green-400 mb-4 "> <FontAwesomeIcon icon={faCheckCircle} />
                        {" "}
                        {product.stock ? " In Stock" : " Out Of Stock"}
                    </div>
                    <p className="text-gray-300 mb-5 ">
                        {product.description}
                    </p>
                    <div className=" text-3xl text-techorange font-bold mb-6">
                        ৳{product.price}
                    </div>
                    <div className="flex gap-4 ">
                        <button className="bg-techorange px-8 py-3 rounded-lg font-bold cursor-pointer">
                            Buy Now
                        </button>
                        <AddToCartButton

                            product={product}

                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className=" mt-14 mx-5">
                <h2 className="text-3xl font-bold mb-5">
                    Product Description
                </h2>
                <p className="text-gray-300">
                    {product.description}
                </p>
            </div >
            {/* Specification */}
            <div className="mt-10 mx-5">
                <h2 className="text-3xl font-bold mb-5 ">
                    Specification
                </h2>
                <div className="border border-gray-700 rounded-lg overflow-hidden ">
                    {Object.entries(product.specification).map(([key, value]) => (<div key={key} className=" flex justify-between p-4 border-b border-gray-700 ">
                        <span>
                            {key}
                        </span>
                        <span className="text-gray-300">
                            {value}
                        </span>
                    </div>
                    ))
                    }
                </div>
            </div>
        </div>

    )


}