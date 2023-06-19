import { useFormik } from 'formik';
import React from 'react'
import { chefValidationSchema } from "./schemas/chefVal.jsx";

const initialValues = {
  name: "",
  email: "",
  address: "",
  speciality: "",
  isNonVeg: "",
  isAvailable: "",
  mobileNumber: "",
  gender: '',
  image: ""
};
function ChefRegistration() {
  // const history = useHistory();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: chefValidationSchema,
    onSubmit: async (values, action) => {
      //API CALL
      console.log(values);
      try {
        // BACKEND :: ...
        let url = `http://localhost:4000/addchef`;

        let data = { name: values.name, email: values.email, address: values.address, isNonVeg: values.isNonVeg, speciality: values.speciality, isAvailable: values.isAvailable, mobileNumber: values.mobileNumber, };
        let res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        action.resetForm();
        console.log(res);
        if (res.status === 500) {
          let erroMessage = await res.text();
          throw new Error(erroMessage);
        }
      } catch (err) {
        alert(err.message);
      } finally { }
      // action.resetForm();
      console.log(values);
      // after success api
      // history.push('/chef-list')
    },
  });

  const handleInputChange = (event) => {
    console.log("handleChange called"); // Check if handleChange is triggered
    handleChange(event);
  };



  return (
    <>
      <div className="row justify-content-center align-items-center shadow-lg bg-body-tertiary rounded h-100">
        <div className="col-sm-3 col-md-4">
          <div className="container">
            <div>
              <div>
                <div>
                  <h1 className="text-warning">Welcome!</h1>
                  <p className="text-success">
                    To the Chief Chef
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="input-block ">
                      <label htmlFor="name" className="input-label p-1 m-1">
                        Chef Name
                      </label>
                      <input className="form-control  "
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Chef Name"
                        value={values.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p className="form-error text-danger">{errors.name}</p>
                      ) : null}
                    </div>

                    <div className="input-block">
                      <label htmlFor="email" className="input-label p-1 m-1">
                        Chef Email
                      </label>
                      <input className="form-control"
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Chef Email"
                        value={values.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p className="form-error text-danger">{errors.email}</p>
                      ) : null}
                    </div>

                    <div className="input-block">
                      <label htmlFor="address" className="input-label p-1 m-2">
                        Chef Address
                      </label>
                      <input className="form-control"
                        type="text"
                        autoComplete="off"
                        name="address"
                        id="address"
                        placeholder="Chef Address"
                        value={values.address}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.address && touched.address ? (
                        <p className="form-error text-danger">{errors.ChefAddress}</p>
                      ) : null}
                    </div>

                    <div className="input-block">
                      <label htmlFor="isNonVeg" className="input-label p-2">
                        Non-Vegiterian ?
                      </label>
                      <input
                        type="checkbox"
                        
                        name="isNonVeg"
                        id="isNonVeg"
                        value={values.isNonVeg}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                    </div>



                    <div className="input-block">
                      <label htmlFor="speciality" className="input-label p-2">
                        Speciality
                      </label>
                      <input className="form-control"
                        type="text"
                        autoComplete="off"
                        name="speciality"
                        id="speciality"
                        placeholder='Speciality'
                        value={values.speciality}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.speciality && touched.speciality ? (
                        <p className="form-error text-danger">{errors.speciality}</p>
                      ) : null}
                    </div>

                    <div className="input-block">
                      <label htmlFor="isAvailable" className="input-label p-2">
                        Available :    YES
                      </label>
                      <input
                        type="checkbox"
                        autoComplete="off"
                        name="isAvailable"
                        id="isAvailable"
                        value={values.isAvailable}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="input-block">
                      <label htmlFor="mobileNumber" className="input-label p-2">
                        Mobile Number
                      </label>
                      <input className="form-control"
                        type="number"
                        autoComplete="off"
                        name="mobileNumber"
                        id="mobileNumber"
                        value={values.mobileNumber}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                      />
                      {errors.mobileNumber && touched.mobileNumber ? (
                        <p className="form-error text-danger">{errors.mobileNumber}</p>
                      ) : null}
                    </div>



                    <div>
                      <button className="btn input-button bg-warning btn-block my-3 rounded-pill fs-4" type="submit">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </>

  )




}

export default ChefRegistration
