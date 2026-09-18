import React, { useEffect } from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaEdit,
  FaStreetView,
  FaTrash,
} from "react-icons/fa";
import { MdLocationCity, MdPinDrop } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {  selectUserCheckOutAddress } from "../../store/Action";
import toast from "react-hot-toast";

const AddressList = ({
  addresses,
  setSelectedAddress,
  setOpenAddressModal,
  onEditAddress,
  setOpenDeleteModal
}) => {
  const dispatch = useDispatch();
  const { selectedUserCheckOutAddress } = useSelector((state) => state.auth);
  const handleAddressSelection = (addresses) => {
    console.log("Address Selected for checkout ");
    dispatch(selectUserCheckOutAddress(addresses));
  };
  const onEditButtonHandler = (addresses) => {
    setSelectedAddress(addresses);
    if (onEditAddress) {
    
    onEditAddress(addresses);
    } else {
      
      setSelectedAddress(addresses );
      setOpenAddressModal(true);
    }
  };
  // const onDeleteButtonHandler = (addresses) => {
  //   setSelectedAddress(addresses);
  //   dispatch(handleUserDeletion(addresses,toast,setSelectedAddress))
  // };
  const onDeleteButtonHandler = (addresses) => {
    setSelectedAddress(addresses);
    setOpenDeleteModal(true);
    
  };

  return (
    <div className="space-y-4 ">
      {addresses.map((address) => (
        <div
          key={address.addressId}
          onClick={() => handleAddressSelection(address)}
          className={`p-4 border rounded-md cursor-pointer relative ${
            selectedUserCheckOutAddress?.addressId === address.addressId
              ? "bg-green-100"
              : "bg-white"
          }`}
        >
          <div className="flex item-start">
            <div className="space-y-1">
              <div className="flex items-center">
                <FaBuilding size={14} className="mr-2 text-gray-600" />
                <p className="font-semibold">{address.buildingName}</p>
                {selectedUserCheckOutAddress?.addressId ===
                  address.addressId && (
                  <FaCheckCircle className="text-green-500 ml-2" />
                )}
              </div>
              <div className="flex items-center">
                <FaStreetView size={17} className="mr-2 text-gray-600" />
                <p>{address.street}</p>
              </div>
              <div className="flex items-center">
                <MdLocationCity size={17} className="mr-2 text-gray-600" />
                <p>
                  {address.city},{address.state},{address.country}{" "}
                </p>
              </div>
              <div className="flex items-center">
                <MdPinDrop size={17} className="mr-2 text-gray-600" />
                <p>{address.pincode}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 absolute top-4 right-2">
            <button onClick={() => onEditButtonHandler(address)}>
              <FaEdit size={18} className="text-teal-700" />
            </button>
            <button onClick={() => onDeleteButtonHandler(address)}>
              <FaTrash size={17} className="text-rose-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
