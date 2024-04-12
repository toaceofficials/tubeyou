import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter a password"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please enter a password"),
});

export const RegisterSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const PasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please enter a password"),
});

export const ProfileSchema = Yup.object({
  name: Yup.string().min(4).required("Please Enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  date_of_birth: Yup.string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Enter a valid date of birth (DD/MM/YYYY)"
    )
    .required("Enter your date of birth"),
  gender: Yup.string().required("Please select your gender"),
  number: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Please enter your phone number"),
  gitHub: Yup.string().url("Please enter a valid URL for your GitHub profile"),
  linkedIn: Yup.string().url(
    "Please enter a valid URL for your LinkedIn profile"
  ),
});
