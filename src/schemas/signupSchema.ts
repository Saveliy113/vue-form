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

export const personalInfoSchema = yup.object({
  nationality:  yup.string().required('Choose nationality'),
  familyName: yup.string().required('Type family name'),
  firstName: yup.string().required('Type first name'),
  idType: yup.string().required('Choose ID type'),
  idNumber: yup.string().required('Type ID number'),
  birthDate: yup.string().required('Type birth date').matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,  {
    message: 'Type date fully'
  }),
})

export const addressSchema = yup.object({
  address: yup.string().required('Type address'),
  city: yup.string().required('Type city'),
  district: yup.string().required('Type district'),
  agreement: yup.boolean().oneOf([true], 'You must agree with PayPal policies')
})
