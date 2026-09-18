import { useForm } from "react-hook-form";
import { FaAddressCard } from "react-icons/fa";
import InputField from "../Shared/InputField";
import { useEffect, useState } from "react";
import Spinners from "../Shared/Spinners";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addUpdateUserAddress } from "../../store/Action";

const AddAddressForm = ({ address, setOpenAddressModal }) => {
  console.log("Address selected for edit", address?.addressId)
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: "onTouched",
  });
  const onSaveAddressHandler = async (data) => {
    console.log("Saving Address", address?.addressId)
    dispatch(
      addUpdateUserAddress(data, toast, address?.addressId, setOpenAddressModal),
    );
  };
  const { btnLoader } = useSelector((state) => state.errors);
  useEffect(() => {
    if (address?.addressId) {
      setValue("buildingName", address?.buildingName);
      setValue("city", address?.city);
      setValue("street", address?.street);  ``
      setValue("state", address?.state);
      setValue("country", address?.country);
      setValue("pinCode", address?.pinCode);
    }
  }, [address]);

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSaveAddressHandler)} className="">
        <div className="flex items-center justify-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
          <FaAddressCard className="mr-2 text-xl" />
          {address?.addressId ? <p>Update Address</p> : <p>Add Address</p>}
        </div>

        <div className="flex flex-col gap-4">
          <InputField
            label="Street"
            required
            id="street"
            type="text"
            message="Street is Required"
            placeholder="Enter your Street"
            register={register}
            errors={errors}
          />
          <InputField
            label="Building Name"
            required
            id="buildingName"
            type="text"
            message="BuildingName is Required"
            placeholder="Enter your BuildingName"
            register={register}
            errors={errors}
          />
          <InputField
            label="City"
            required
            id="city"
            type="text"
            message="City is Required"
            placeholder="Enter your City"
            register={register}
            errors={errors}
          />
          <InputField
            label="State"
            required
            id="state"
            type="text"
            message="State is Required"
            placeholder="Enter your State"
            register={register}
            errors={errors}
          />
          <InputField
            label="Country"
            required
            id="country"
            type="text"
            message="Country Name is Required"
            placeholder="Enter your country Name"
            register={register}
            errors={errors}
          />
          <InputField
            label="Pin-Code"
            required
            id="pinCode"
            type="text"
            message="PinCode is Required"
            placeholder="Enter your PinCode"
            register={register}
            errors={errors}
          />
        </div>

        <button
          disabled={btnLoader}
          className="bg-custom-blue text-white rounded-md px-4 py-2 mt-4 "
          type="submit"
        >
          {btnLoader ? (
            <>
              <Spinners /> Loading...
            </>
          ) : (
            <>Save</>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
