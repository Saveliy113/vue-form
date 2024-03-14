export const quasarConfig = (state) => ({
  props: {
    error: !!state.errors[0],
    "error-message": state.errors[0],
  },
});
