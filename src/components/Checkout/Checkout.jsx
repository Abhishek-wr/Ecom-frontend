import { Step, StepLabel, Stepper } from "@mui/material"
import { useEffect, useState } from "react"
import AddressInfo from "./AddressInfo";
import { useDispatch, useSelector } from "react-redux";
import {  getUserAddresses } from "../../store/Action";
import { Button } from "@headlessui/react";
import toast from "react-hot-toast";
import Skeleton from "../Shared/Skeleton";
import ErrorPage from "./ErrorPage";
import PaymentMethod from "./paymentMethod";


const Checkout = () => {
  const [activeStep,setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const {address,selectedUserCheckOutAddress} = useSelector((state) =>state.auth);
  const {isLoading,errorMessage} = useSelector((state) =>state.errors);
  const {paymentMethod} = useSelector((state) => state.payment)
  const steps = [
    "Address",
    "Payment Method",
    "Order Summary",
    "Payment"
  ]
  useEffect(() =>{
    dispatch(getUserAddresses())
  },[dispatch])
  const handleBack = () =>{
    setActiveStep((prevStep) =>prevStep-1)
    
  }
  const handleNext = () =>{
    if(activeStep === 0 && !selectedUserCheckOutAddress){
      toast.error("Please select checkout address before proceeding")
      return;
    }
    else if(activeStep === 1 && (!selectedUserCheckOutAddress || !paymentMethod)){
      toast.error("Please select payment method before proceeding")
      return;
    }
    setActiveStep((prevStep) =>prevStep+1)
  }
  return (
    <div className="py-14 min-h-[calc(100vh-100px)]">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label,index) =>(
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {isLoading ?(
        <div className="lg:w-[80%] mx-auto py-5">
          <Skeleton/>
          </div>
      ):(
        <div className="mt-5">

          {activeStep === 0 && <AddressInfo address={address} />}
          {activeStep === 1 && <PaymentMethod/>}
      </div>
      )}
      
      <div
        className="flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-white left-0 w-full py-4 border-slate-200 "
        style={{boxShadow:"0 -2px 4px rgba(100,100,100,0.15)"}}>
          <Button
            varient="outlined"
            disabled={activeStep === 0}
            className={"bg-custom-blue px-4 h-10 rounded-md text-white"}
            onClick={handleBack}>
                Back
          </Button>
            {activeStep !== steps.length-1 &&(
              <Button
                disabled={
                    errorMessage || (activeStep === 0 ? !selectedUserCheckOutAddress 
                      : activeStep === 1 ? !paymentMethod 
                      :false
                    ) 
                }
                className={`bg-custom-blue px-4 h-10 rounded-md text-white
                ${
                  errorMessage || 
                  (activeStep === 0 && !selectedUserCheckOutAddress) ||
                  (activeStep == 1 && !paymentMethod)
                  ? "opacity-60"
                  : ""
                }`}
                onClick={handleNext}>
                Proceed
              </Button>
            )}
            
            
      </div>
      {errorMessage && <ErrorPage message={errorMessage}/>}
    </div>
  )
}

export default Checkout
