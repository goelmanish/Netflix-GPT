export const validateSignIn = (email, password) => {
  let isValidEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(
    email
  );
  let isValidPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,12}/.test(
      password
    );

  if (!isValidEmail) return "Email is not valid";
  if (!isValidPass) return "Password is not valid";
  return null;
};
