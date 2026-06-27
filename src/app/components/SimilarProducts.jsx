import { products } from "@/data/products";

import ProductCard from "./ProductCard";



export default function SimilarProducts({ category, id }) {


    const similar = products.filter(

        item =>

            item.category === category

            &&

            item.id !== id

    );



    return (


        <section className="max-w-375 mx-auto container-custom py-10 ">
            <h2 className=" text-3xl font-bold mb-6 ">
                Similar Products
            </h2>

            <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 ">
                {similar.slice(0, 4).map(product => (<ProductCard key={product.id} product={product}

                            />
                        ))
                }
            </div>
        </section>
    )
}