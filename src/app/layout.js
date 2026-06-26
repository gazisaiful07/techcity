import "./globals.css";


export const metadata={

title:"TechCity | Computer & Technology Store",

description:
"Premium Computer Components and Tech Products"

};



export default function RootLayout({children}){


return(

<html lang="en">


<body>


{children}


</body>


</html>


)

}
