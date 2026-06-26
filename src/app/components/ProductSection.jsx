import { products } from "@/data/products";

import ProductCard from "./ProductCard";



export default function ProductSection({ title, tag }) {


    const filteredProducts =

        products.filter(
            (product) => product.tag === tag
        );



    return (


        <section className=" container-custom py-10 ">


            <h2 className=" text-3xl font-bold mb-6 ">
                {title}
            </h2>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                {
                    filteredProducts.map(product => (
                        <ProductCard

                            key={product.id}

                            product={product}

                        />


                    ))


                }



            </div>


        </section>


    )

}