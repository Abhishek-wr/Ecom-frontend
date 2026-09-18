// import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { MdClose, MdDone } from 'react-icons/md';
// import Status from './Status';

// function ProductViewModal({ open, setOpen, product, isAvailable }) {

//     if (!product) return null;

//     const { 
//         productName,
//         image,
//         description,
//         price,
//         specialPrice
//     } = product;

//     return (
//         <>
//             <Dialog 
//                 open={open} 
//                 onClose={() => setOpen(false)} 
//                 className="relative z-50"
//             >

//                 <DialogBackdrop className="fixed inset-0 bg-black/30" />

//                 <div className="fixed inset-0 flex w-screen items-center justify-center p-4">

//                     <DialogPanel className="max-w-lg space-y-4 border bg-white rounded-lg overflow-hidden">

//                         {image && (
//                             <div className="flex aspect-[3/2]">
//                                 <img
//                                     className="w-full object-cover"
//                                     src={image}
//                                     alt={productName}
//                                 />
//                             </div>
//                         )}

//                         <div className="px-6 pt-6 pb-4">

//                             <DialogTitle 
//                                 className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800"
//                             >
//                                 {productName}
//                             </DialogTitle>


//                             <div className="space-y-2 text-gray-700 pb-4">

//                                 <div className="flex items-center justify-between">

//                                     {specialPrice ? (
//                                         <div className="flex flex-col">

//                                             <span className="text-gray-700 line-through">
//                                                 ${Number(price).toFixed(2)}
//                                             </span>

//                                             <span className="text-xl font-bold text-slate-700">
//                                                 ${Number(specialPrice).toFixed(2)}
//                                             </span>

//                                         </div>

//                                     ) : (

//                                         <div className="flex flex-col">

//                                             <span className="invisible">
//                                                 Placeholder
//                                             </span>

//                                             <span className="text-xl font-bold text-slate-700">
//                                                 ${Number(price).toFixed(2)}
//                                             </span>

//                                         </div>
//                                     )}


//                                     {isAvailable ? (
//                                         <Status
//                                             text="In-Stock"
//                                             icon={MdDone}
//                                             bg="bg-teal-200"
//                                             color="text-teal-900"
//                                         />

//                                     ) : (

//                                         <Status
//                                             text="Out-of-Stock"
//                                             icon={MdClose}
//                                             bg="bg-rose-200"
//                                             color="text-rose-700"
//                                         />

//                                     )}

//                                 </div>


//                                 <Description className="text-gray-600">
//                                     {description}
//                                 </Description>


//                             </div>

//                         </div>


//                     </DialogPanel>

//                 </div>

//             </Dialog>
//         </>
//     )
// }

// export default ProductViewModal;
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Divider } from '@mui/material';
import { MdClose, MdDone } from 'react-icons/md';
import Status from './Status';


function ProductViewModal({ open, setOpen, product, isAvailable }) {

    if (!product) return null;

    const { 
        productName,
        Image,
        description,
        price,
        specialPrice
    } = product;
    

    return (
        <>
            <Dialog 
                open={open} 
                onClose={() => setOpen(false)} 
                className="relative z-50"
            >

                <DialogBackdrop className="fixed inset-0 bg-black/30" />


                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">

                    <DialogPanel className="max-w-lg space-y-4 border bg-white rounded-lg overflow-hidden">


                        {Image && (
                            <div className="flex aspect-[3/2]">
                                <img
                                    className="w-full object-contain"
                                    src={Image}
                                    alt={productName}
                                />
                            </div>
                        )}


                        <div className="px-6 pt-10 pb-2">


                            <DialogTitle 
                                className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-tight text-gray-800"
                            >
                                {productName}
                            </DialogTitle>


                            <div className="space-y-2 text-gray-700 pb-4">


                                <div className="flex items-center justify-between">


                                    {specialPrice ? (

                                        <div className="flex flex-col">

                                            <span className="text-gray-700 line-through">
                                                ${Number(price).toFixed(2)}
                                            </span>

                                            <span className="text-xl font-bold text-slate-700">
                                                ${Number(specialPrice).toFixed(2)}
                                            </span>

                                        </div>

                                    ) : (

                                        <div className="flex flex-col">

                                            <span className="invisible">
                                                Placeholder
                                            </span>

                                            <span className="text-xl font-bold text-slate-700">
                                                ${Number(price).toFixed(2)}
                                            </span>

                                        </div>

                                    )}



                                    {isAvailable ? (

                                        <Status    
                                            text="In-Stock"
                                            icon={MdDone}
                                            bg="bg-teal-200"
                                            color="text-teal-900"
                                        />

                                    ) : (

                                        <Status
                                            text="Out-of-Stock"
                                            icon={MdClose}
                                            bg="bg-rose-200"
                                            color="text-rose-700"
                                        />

                                    )}


                                </div>


                                <Divider />


                                <Description className="text-gray-600">
                                    {description}
                                </Description>


                            </div>


                        </div>
                       <div className=" px-6 py-4 flex justify-end gap-4">
                            <button
                                onClick={() => setOpen(false)}
                                type="button"
                                className="px-4 py-2 text-sm font-semibold text-slate-700 border border-black hover:text-slate-800 hover:border-slate-800 rounded-md"
                            >
                                Close
                            </button>
                        </div>

                    </DialogPanel>


                </div>


            </Dialog>
        </>
    )
}

export default ProductViewModal; 