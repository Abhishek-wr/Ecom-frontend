// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { HiOutlineTrash } from "react-icons/hi";
// import SetQuantity from "./setQuantity";
// const ItemContent = ({
//     productId,
//     productName,
//     Image,
//     description,
//     quantity,
//     price,
//     discount,
//     specialPrice,
//     cartId,
// }) =>{
//     const [currentQuantity,setCurrentQuantity] = useState(quantity);
    
//     return(
            
//         <div className="grid md:grid-cols-5 grid-cols-4 gap-4 md:text-base text-sm  items-center border-[1.5px] border-slate-200">
//             <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
//                 <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
//                     <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
//                         {productName}
//                     </h3>
//                 </div>
//                 <div className="md:w-36 sm: w-24 w-12">
//                     <img src={Image} alt={productName}
//                     className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-md" />
//                 </div>
//                 <div className="flex items-center gap-5 mt-3">
//                     <button onClick ={() => {}} className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200">
//                         <HiOutlineTrash size = {16} className = "text-rose-600"/>
//                         Remove</button>
//                 </div>
                    
//             </div>
//             <div className="flex justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600">
//                 {Number(specialPrice)}
//             </div>
//             <div className="flex justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600">
//                 <SetQuantity 
//                 quantity={currentQuantity}
//                 cardCounter={true}
//                 handleQtyIncrease={() =>{}}
//                 handleQtyDecrease={() =>{}}/>
//             </div>
//             <div className="flex justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600">
//                 {Number(quantity) * Number(specialPrice)}
//             </div>

//         </div>
        
//     )
// }
// export default ItemContent;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";
import SetQuantity from "./setQuantity";
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from "../../store/Action";
import toast from "react-hot-toast";
import { FormatPrice } from "../../Utils/FormatPrice";
import { TruncateText } from "../../Utils/TruncateText";
const ItemContent = ({
    productId,
    productName,
    Image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    cartId,
}) =>{
    const [currentQuantity,setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();
    const handleQtyIncrease = (cartItems) =>{
        dispatch(increaseCartQuantity(cartItems,
            toast,currentQuantity,setCurrentQuantity
        ));
    }
    const handleQtyDecrease = (cartItems) =>{
        if(currentQuantity > 1){
            const newQuantity = currentQuantity -1;
            setCurrentQuantity(newQuantity);
            dispatch(decreaseCartQuantity(cartItems,newQuantity));
        }
        else if(currentQuantity == 1){
            dispatch(removeFromCart(cartItems,toast));
        }
        
    }
    const removeItemFromCart = (cartItems) =>{
        dispatch(removeFromCart(cartItems,toast));
    }
    
    
    return(
            
        <div className="grid md:grid-cols-5 grid-cols-4 gap-4 md:text-base text-sm  items-center border-[1.5px] border-slate-200 p-4">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2 ">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {TruncateText(productName)}
                    </h3>
                </div>
                <div className="md:w-36 sm: w-24 w-12">
                    <img src={Image} alt={productName}
                    className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-md" />
                </div>
                <div className="flex items-center gap-5 mt-3">
                    <button onClick ={() => removeItemFromCart({
                        productId,
                        productName,
                        Image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice,
                    })} className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200">
                        <HiOutlineTrash size = {16} className = "text-rose-600"/>
                        Remove</button>
                </div>
                    
            </div>
            <div className="flex justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600">
                {FormatPrice(Number(specialPrice))}
            </div>
            <div className="flex justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600">
                <SetQuantity 
                quantity={quantity}
                cardCounter={true}
                handleQtyIncrease={() =>handleQtyIncrease({
                    Image,
                    productName,
                    description,
                    specialPrice,
                    price,
                    productId,
                    quantity
                })}
                handleQtyDecrease={() =>handleQtyDecrease({
                    Image,
                    productName,
                    description,
                    specialPrice,
                    price,
                    productId,
                    quantity
                })}/>
            </div>
            <div className="flex justify-self-center lg:text-[17px] text-sm font-semibold text-slate-600">
                {FormatPrice(Number(currentQuantity) * Number(specialPrice))}
            </div>

        </div>
        
    )
}
export default ItemContent;