import {categories} from "@/data/categories";


import {FontAwesomeIcon}

from "@fortawesome/react-fontawesome";



export default function Category(){



return(


<section className="
container-custom
py-10
">


<h2 className="
text-3xl
font-bold
mb-8
">


Shop By Category


</h2>





<div className="

grid

grid-cols-2

sm:grid-cols-3

md:grid-cols-4

lg:grid-cols-6

gap-5

">



{


categories.map((category,index)=>(


<div

key={index}

className="

group

bg-techdark

border

border-gray-700

rounded-xl

p-6

text-center

cursor-pointer

transition-all

duration-300

hover:bg-techorange

hover:-translate-y-2

"

>


<div className="


text-4xl

text-techorange

group-hover:text-white

mb-4

transition


">


<FontAwesomeIcon

icon={category.icon}

/>


</div>





<h3 className="

text-gray-200

group-hover:text-white

font-semibold

">


{category.name}


</h3>



</div>



))


}




</div>



</section>



)


}