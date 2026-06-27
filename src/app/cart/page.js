"use client";

import { useCartStore } from "../../../store/cartStore";





export default function CartPage(){


const {

cart,

removeFromCart,

increaseQuantity,

decreaseQuantity

}

=
useCartStore();





const total = cart.reduce(

(sum,item)=>

sum+(item.price*item.quantity),

0

);





return(


<div className="
container-custom
py-10
">



<h1 className="
text-4xl
font-bold
mb-8
">

Shopping Cart

</h1>






{

cart.length===0

?

<h2>

Cart Empty

</h2>


:

cart.map(item=>(


<div

key={item.id}

className="
bg-techdark
p-5
rounded-lg
mb-4
flex
items-center
justify-between
"


>



<div className="
flex
gap-5
items-center
">


<img

src={item.image}

className="
w-20
h-20
bg-white
object-contain
"

/>


<div>

<h3>

{item.name}

</h3>


<p>

৳ {item.price}

</p>


</div>


</div>






<div>


<button

onClick={()=>decreaseQuantity(item.id)}

className="
px-3
"

>

-

</button>



<span>

{item.quantity}

</span>



<button

onClick={()=>increaseQuantity(item.id)}

className="
px-3
"

>

+

</button>




<button

onClick={()=>removeFromCart(item.id)}

className="
ml-5
text-red-500
"

>

Remove

</button>



</div>



</div>



))


}





<h2 className="
text-3xl
text-techorange
font-bold
mt-8
">


Total: ৳ {total}


</h2>



</div>


)


}