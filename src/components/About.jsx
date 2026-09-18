// const About = () =>{
//     return(
//         <div className="lg:px-16 sm:px-8 px-4">
//             <div className="flex justify-center items-center pt-2 font-semibold text-2xl">
//                 <h1>About</h1>
//             </div>
//             <div className="grid grid-cols-2 gap-x-6">
//                 <div className="flex justify-center items-center px-2 text-2xl font-semibold">
//                     <p>We are dedicated to providing high-quality products and a seamless shopping experience for our customers. Our goal is to make it easy for you to discover products you love, with a focus on quality, reliability, and customer satisfaction. We continuously work to improve our services and bring you a better experience every day.</p>
//                 </div>
//                 <div className="flex items-center justify-center ">
//                     <img
//                         className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105"
//                         src="https://placehold.net/avatar.svg"

import ProductCard from "./Shared/ProductCard";

                        
//                         />

//                 </div>
//             </div>
//         </div>
//     )
// }
// export default About;
const About = () =>{
    const products = [
        {
            image: "https://embarkx.com/sample/placeholder.png",
            productName: "iPhone 13 Pro Max",
            description:
            "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
            specialPrice: 720,
            price: 780,
        },
        {
            image: "https://embarkx.com/sample/placeholder.png",
            productName: "Samsung Galaxy S21",
            description:
            "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
            specialPrice: 699,
            price: 799,
        },
        {
            image: "https://embarkx.com/sample/placeholder.png",
            productName: "Google Pixel 6",
            description:
            "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
            price: 599,
            specialPrice: 400,
        }
    ];
    return(
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 font-bold text-4xl text-center mb-12">
                About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">We are dedicated to providing high-quality products and a seamless shopping experience for our customers. Our goal is to make it easy for you to discover products you love, with a focus on quality, reliability, and customer satisfaction. We continuously work to improve our services and bring you a better experience every day.</p>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
                    <img
                        className="w-full h-auto cursor-pointer rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        src="https://embarkx.com/sample/placeholder.png"
                        
                        />

                </div>
            </div>
            <div>
                <h1 className="text-slate-800 font-bold text-4xl text-center mb-12">
                    Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product,index) =>(
                        <ProductCard 
                            key={index}
                            image={product.image}
                            productName={product.productName}
                            description={product.description}
                            specialPrice={product.specialPrice}
                            price={product.price}
                            about/>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default About;