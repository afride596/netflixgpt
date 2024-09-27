const validateEmailAndPassword = (FullName, Email, Password) => {

 
  const isFullName = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(FullName);
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    Email
  );
  const isPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      Password
    );

  if (!isFullName) {
    return "Full name cannot contain numbers or special characters.";
  }
  if (!isEmail) {
    return "Please enter a valid email address.";
  }
  if (!isPassword) {
    return "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  return null;
};
export default validateEmailAndPassword;
