import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup.string().required("Type your email").email("Type correct email"),
});

export const phoneSchema = yup.object({
  phone: yup.string().required("Type your phone"),
});

export const passwordSchema = yup.object({
  password: yup.string().min(8),
});

export const signupSchema = yup.object().shape({
  email: emailSchema,
  phone: phoneSchema,
  passwordSchema: passwordSchema,
});
