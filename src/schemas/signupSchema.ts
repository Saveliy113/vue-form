import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup.string().required("Type your email").email("Type correct email"),
});

export const phoneSchema = yup.object({
  phone: yup
    .string()
    .required("Type your phone")
    .matches(/^\(\d{3}\)\s\d{3}\s-\s\d{4}$/, {
      message: "Type your phone fully",
    }),
});

export const passwordSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d])|(?=.*[a-zA-Z])(?=.*\d)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d])|(?=.*\d)(?=.*[^a-zA-Z\d])/,
      "Password must contain at least two of the following: letters, numbers, special characters"
    ),
});

export const signupSchema = yup.object().shape({
  email: emailSchema,
  phone: phoneSchema,
  passwordSchema: passwordSchema,
});
