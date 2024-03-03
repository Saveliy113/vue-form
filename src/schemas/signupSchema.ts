import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup.string().required("Type your email").email("Type correct email"),
});
