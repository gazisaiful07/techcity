"use client";


export default function Hero(){


return(


<section className="container-custom py-8">


<div

className="
relative
h-[450px]
rounded-xl
overflow-hidden
bg-techdark
flex
items-center
"


>


{/* Background Image */}

<img

src="/images/banner.jpg"

alt="TechCity Offer"

className="
absolute
w-full
h-full
object-cover
opacity-60
"

/>





<div className="
relative
z-10
p-10
max-w-xl
">


<h1 className="
text-5xl
font-bold
mb-5
">

Next Generation

<br/>

<span className="text-techorange">

Gaming PC

</span>


</h1>



<p className="
text-gray-200
text-lg
mb-6
">


Build your dream computer with premium components.

</p>



<button

className="
bg-techorange
px-8
py-3
rounded-lg
font-bold
hover:bg-orange-500
transition
"


>


Shop Now


</button>



</div>



</div>


</section>


)

}