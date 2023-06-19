import * as Yup from "yup";

export const chefValidationSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    address: Yup.string().min(3).max(50).required("Please enter your email"),
    speciality :Yup.string().min(3).max(50).required("Please enter at least one Speciality!"),
    mobileNumber : Yup.number().required("Please enter mobile number")
  
  });