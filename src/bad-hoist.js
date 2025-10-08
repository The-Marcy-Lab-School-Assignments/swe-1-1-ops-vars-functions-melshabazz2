const debugFunc = () => {
  const time = 'today';
  const name = 'Zo';
  let mood = 'happy';

  console.log(`Hello ${name}, are you feeling ${mood} ${time}?`);

  mood = 'sad';
  console.log(`Oh no, I'm sorry you're feeling ${mood} ${time}.`)
};

debugFunc();

module.exports = {
  debugFunc,
};
