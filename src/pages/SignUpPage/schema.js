import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  username: yup
    .string()
    .min(1, "You must enter a valid username")
    .max(15, "Please enter a shorter username")
    .required("You must enter a valid username"),
  phoneNumber: yup
    .string()
    .required("This field is required")
    .matches(
      phoneRegExp,
      "Phone number is not valid. Enter in following format: 9092345675"
    )
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
  password: yup
    .string()
    .required("A password is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});

export default schema;
