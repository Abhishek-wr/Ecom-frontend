
// const SetQuantity = ({
//     quantity,
//     cardCounter,
//     handleQtyIncrease,
//     handleQtyDecrease,
// }) =>{
//     const btnStyles = "border-[1.2px] border-slate-800 px-3 rounded-md";
//     return(
//         <div className="flex gap-8 items-center">
//             {cardCounter ? null:<div className="font-semibold">{quantity}</div>}
//             <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
//                 <button 
//                     disabled= {quantity <= 1}
//                     className={btnStyles}>
//                     -
//                 </button>
//                 <button>
//                     <div className="text-red-500">{quantity}</div>

//                 </button>
//                 <button 
                    
//                     className={btnStyles}>
//                     +
//                 </button>
//             </div>
//         </div>
//     )
// }
// export default SetQuantity; 

const SetQuantity = ({
    quantity,
    cardCounter,
    handleQtyIncrease,
    handleQtyDecrease,
}) =>{
    const btnStyles = "border-[1.2px] border-slate-800 px-3 rounded-md";
    return(
        <div className="flex gap-8 items-center">
            {cardCounter ? null:<div className="font-semibold">{quantity}</div>}
            <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
                <button 
                    
                    className={btnStyles}
                    onClick={handleQtyDecrease}>
                    -
                </button>
                <button>
                    <div className="text-red-500">{quantity}</div>

                </button>
                <button 
                    
                    className={btnStyles}
                    onClick={handleQtyIncrease}>
                    +
                </button>
            </div>
        </div>
    )
}
export default SetQuantity; 