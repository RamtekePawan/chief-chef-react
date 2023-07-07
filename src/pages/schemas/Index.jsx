import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2, "Name should atleast 5 character!!!").max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8, "Minimum 8 Charecter Required").required("Please enter your password"),
  confirm_password: Yup.string()
    .required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password must match")
});

