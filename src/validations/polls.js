const constraints = {
  pollNew: {
    optionOne: {
      presence: true,
      length: {
        minimum: 1,
        message: "Please enter option 1"
      }
    },
    optionTwo: {
      presence: true,
      length: {
        minimum: 1,
        message: "Please enter option 2"
      }
    },
  }
};

export default constraints;
