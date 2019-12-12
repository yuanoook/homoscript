const YouSee = require('./you/see');
const YouDo = require('./you/do');
const YouUse = require('./you/use');

const Homo = {
  YouSee: function() {
    YouSee.apply(null, arguments);
    return Homo;
  },
  YouDo: function() {
    YouDo.apply(null, arguments);
    return Homo;
  },
  YouUse: function() {
    YouUse.apply(null, arguments);
    return Homo;
  }
};

Homo.Test = () => {
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
    .YouUse(targetValue)
    .YouDo('input')
    .YouDo('submit');
};

module.exports = Homo;
