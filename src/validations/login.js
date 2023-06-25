const constraints = {
  loginUser: {
    user: {
      presence: true,
      length: {
        minimum: 1,
        message: "Please enter the option"
      }
    }
  }
};

export default constraints;
