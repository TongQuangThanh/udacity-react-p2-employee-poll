export const isAnswerPoll = (poll, idUser) => {
  return poll.optionOne.votes.indexOf(idUser) !== -1 || poll.optionTwo.votes.indexOf(idUser) !== -1;
};

export const getResult = (question, optionType) => {
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
  const percentage = ((question[optionType].votes.length) / totalVotes) * 100;

  return {
    numVotes: question[optionType].votes.length,
    percentage: percentage < 50 ? Math.floor(percentage) : Math.ceil(percentage)
  }
}

export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

export const logo = "https://static.vecteezy.com/system/resources/previews/022/100/698/non_2x/marvel-logo-transparent-free-png.png";
