import * as yup from "yup"


const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    first_name: yup
      .string()
      .min(3, "First Name must be at least 3 characters long")
      .required("First Name is Required"),
    last_name: yup
      .string()
      .min(3, "Last Name must be at least 3 characters long")
      .required("Last Name is Required"),
    password: yup
      .string()
      .min(6,"Password must be at least 6 characters long")
      .required("Password is Required"),
      role: yup
      .string()
      .oneOf(['alumni', 'instructor', 'tl', 'student'], "You must select a role")
      .required("You must select a role"),
  });

  export default formSchema