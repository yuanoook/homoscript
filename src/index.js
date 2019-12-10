const YouSee = require('./yousee');
const YouDo = require('./youdo');

const Homo = {
  YouSee: function() {
    YouSee.apply(null, arguments);
    return Homo;
  },
  YouDo: function() {
    YouDo.apply(null, arguments);
    return Homo;
  },
};

setTimeout(() => {
  const targetValue = 'define Rango';
  Homo
    .YouSee('input')
    .YouDo('highlight')
    .YouSee({
      type: 'input',
      desc: {
        value: v => v !== targetValue,
      },
    })
    .YouDo({
      action: 'input',
      target: it,
      payload: targetValue,
    })
    .YouDo('submit');
}, 1000);

export default Homo;
