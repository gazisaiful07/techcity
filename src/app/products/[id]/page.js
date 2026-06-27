import { products } from "@/data/products";

import ProductDetails from "@/app/components/ProductDetails";
import SimilarProducts from "@/app/components/SimilarProducts";



export default async function ProductPage({ params }) {


const { id } = await params;



const product = products.find(

(item) => item.id == id

);



if (!product) {

return (

<h1 className="text-3xl text-center py-10">

Product Not Found

</h1>

);

}



return (

<>

<ProductDetails

product={product}

/>



<SimilarProducts 

category={product.category}

id={product.id}

/>


</>

);


}