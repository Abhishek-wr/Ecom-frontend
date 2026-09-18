import { Button, Skeleton } from '@mui/material';
import { useDebugValue, useEffect, useState } from 'react';

import { FaAddressBook } from 'react-icons/fa';
import AddressInfoModal from './AddressInfoModal';
import AddAddressForm from './AddAddressForm';
import { useDispatch, useSelector } from 'react-redux';
import AddressList from './AddressList';
import { DeleteModal } from './DeleteModal';
import toast from 'react-hot-toast';
import { deleteUserAddresses } from '../../store/Action';

const AddressInfo = ({address}) => {
    const noAddressExist = !address || address.length == 0
    const {isLoading,btnLoader} = useSelector((state) => state.errors);
    const [openAddressModal,setOpenAddressModal] = useState(false);
    const [selectedAddress,setSelectedAddress] = useState("");
    const [shouldOpenModal, setShouldOpenModal] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        
        if (shouldOpenModal) {
        
            setOpenAddressModal(true);
            setShouldOpenModal(false);
        }
    }, [selectedAddress, shouldOpenModal]); 
    const addNewAddressHandler = () =>{
        setSelectedAddress("")
        setShouldOpenModal(true);
    }
    const deleteAddressHandler = () =>{
        dispatch(deleteUserAddresses(
            toast,
            selectedAddress?.addressId,
            setOpenDeleteModal
        ))
    }
    const handleEditAddress = (address) => {
       
        console.log("🟢 editing Address ID:", address?.addressId);
        setSelectedAddress(address);
        setShouldOpenModal(true); 
    };
    
    return (
        <div className='pt-4 '>
            {noAddressExist ? (
                <div className='p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center'>
                    <FaAddressBook size={30} className='text-gray-500 mb-4'/>
                    <h1 className='text-slate-800 text-center font-bold text-2xl mb-2'>
                        No Address Found
                    </h1>
                    <button 
                        onClick={addNewAddressHandler}
                        className='px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all'>
                        Add Address
                    </button>
                    
                </div>
            ):(
                <div className='relative p-6 rounded-lg max-w-md mx-auto'>
                    <h1 className='text-slate-800 text-center font-bold text-2xl'>
                        
                        Select Address
                    </h1>
                    {isLoading ? (
                        <div className='py-4 px-8'>
                            <Skeleton/>
                        </div>
                    ):
                    (
                        <>
                            <div className='space-y-4 pt-6'> 
                                <AddressList 
                                    addresses={address}   
                                    setSelectedAddress={setSelectedAddress}
                                    setOpenAddressModal={setOpenAddressModal}
                                    onEditAddress={handleEditAddress} 
                                    setOpenDeleteModal = {setOpenDeleteModal}
                                />
                            </div>
                            {address.length > 0 && (
                                <div className='mt-4'>
                                    <button 
                                        onClick={addNewAddressHandler}
                                        className='px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all'> 
                                        Add More
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
            <AddressInfoModal
                open = {openAddressModal}
                setOpen={setOpenAddressModal}>
                    <AddAddressForm 
                        address = {selectedAddress}
                        setOpenAddressModal = {setOpenAddressModal}
                        />
            </AddressInfoModal>
            <DeleteModal
                open ={openDeleteModal}
                setOpen={setOpenDeleteModal}
                loader={btnLoader}
                title="Delete Address"
                onDeleteHandler={deleteAddressHandler}/>
        </div>
    )
}

export default AddressInfo
