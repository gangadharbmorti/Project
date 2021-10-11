import React from "react";
import "./css/Student.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

const EmployeeComponent = () => {
  
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className="Formik-group">
      <Formik
        initialValues={{
          Name: "",

          Location: "",

          MobileNo: "",

          EmailId: "",
        }}
        validationSchema={yup.object({
          Name: yup
            .string()
            .max(20, "Name should not exceed 20 Characters")

            .required("Please Enter Name"),

          Location: yup
            .string()

            .required("Please Enter City"),
            MobileNo:yup.string().matches(phoneRegExp, 'Phone number is not valid')

            .required("Please Enter Mobile Number"),

          EmailId: yup
            .string()

            .email("Invalid email address")

            .required("Please Enter Email Id"),
        })}
        onSubmit={(values) => {
        //   alert(JSON.stringify(values));
        console.log(values);
        }}
      >
        {(props) => (
          <div>
            <h2>Student Details</h2>

            <Form>
              <p className="Formik-data">
                <label htmlFor="Name">Name </label>

                <Field name="Name" type="text" className="formik-input"></Field>
                <div className="error">
                  <ErrorMessage name="Name" className="error"></ErrorMessage>
                </div>
              </p>
              <p className="Formik-data">
                <label htmlFor="EmailId"> Email ID </label>

                <Field
                  name="EmailId"
                  type="text"
                  className="formik-input"
                  autoComplete="off"
                ></Field>
                <div className="error">
                  <ErrorMessage name="EmailId" className="error"></ErrorMessage>
                </div>
              </p>
              <p className="Formik-data">
                <label htmlFor="MobileNo">Mobile No </label>

                <Field
                  name="MobileNo"
                  type="text"
                  className="formik-input"
                ></Field>
                <div className="error">
                  <ErrorMessage
                    name="MobileNo"
                    className="error"
                  ></ErrorMessage>
                </div>
              </p>

              <p className="Formik-data">
                <label htmlFor="Location">City</label>

                <Field
                  name="Location"
                  type="text"
                  className="formik-input"
                ></Field>
                <div className="error">
                  <ErrorMessage name="Location"></ErrorMessage>
                </div>
              </p>

              <button
                type="submit"
                disabled={props.isValid === false}
                className="btn"
              >
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
     
    </div>
  );
};

export default EmployeeComponent;
