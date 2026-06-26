
import Category from "./components/Category";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";





export default function Home() {


    return (

        <main className="max-w-375 mx-auto ">


            <Hero></Hero>


            <Category></Category>
            <ProductSection

                title=" Best Sellers"

                tag="Best Seller"

            />


            <ProductSection

                title="Latest Products"

                tag="Latest"

            />


            <ProductSection

                title="Featured Products"

                tag="Featured"

            />


        </main>

    )

}