"use client";


import { useState } from "react";
import {pcComponents} from "@/data/pcComponents";

import { FontAwesomeIcon }
    from "@fortawesome/react-fontawesome";


import {

    faMicrochip,
    faMemory,
    faHardDrive,
    faDesktop,
    faBolt

}

    from "@fortawesome/free-solid-svg-icons";




export default function PCBuilder() {
    const [build, setBuild] = useState({});
    const selectComponent = (type, item) => { setBuild({ ...build, [type]: item }) }
    const totalPrice = Object.values(build)
        .reduce(
            (total, item) => total + item.price, 0);

    return (
        <div className="container-custom py-10 max-w-7xl mx-auto ">
            <h1 className=" text-4xl font-bold text-techorange mb-8 ">
                PC Builder
            </h1>

            <div className="grid md:grid-cols-2 gap-8 ">
                {/* LEFT SIDE */}

                <div className=" space-y-6 ">
                    {
                        Object.entries(pcComponents).map(([type, items]) => (
                            <div key={type} className=" bg-techdark p-5 rounded-lg border border-gray-700 ">
                                <h2 className=" text-xl font-bold mb-4 capitalize ">
                                    {type}
                                </h2>
                                <select className=" w-full p-3 text-black rounded " onChange={(e) => {
                                    const selected = items.find((i) => i.id == e.target.value);
                                    selectComponent(type, selected)
                                }}
                                >
                                    <option>

                                        Select {type}

                                    </option>

                                    {items.map(item => (
                                        <option
                                            key={item.id}

                                            value={item.id}
                                        >
                                            {item.name}
                                            -
                                            ৳{item.price}
                                        </option>
                                    ))
                                    }
                                </select>
                            </div>
                        ))
                    }

                </div>
                {/* RIGHT SUMMARY */}
                <div className="bg-techdark p-6 rounded-lg h-fit border border-gray-700 ">
                    <h2 className=" text-2xl font-bold mb-5 ">
                        Build Summary
                    </h2>
                    {Object.entries(build).map(([key, value]) => (<div key={key} className="flex justify-between border-b border-gray-700 py-3 ">
                        <span className="capitalize">
                            {key}
                        </span>
                        <span>
                            ৳{value.price}
                        </span>
                    </div>
                    ))
                    }

                    <div className=" mt-5 text-xl font-bold flex justify-between ">
                        <span>
                            Total
                        </span>

                        <span className=" text-techorange ">
                            ৳{totalPrice}
                        </span>
                    </div>
                    <button className=" mt-6 w-full bg-techorange py-3 rounded font-bold hover:bg-orange-500 "
                    >
                        Add Build To Cart
                    </button>
                </div>
            </div>
        </div>


    )


}
