import Homo from './homo/index';

export const Start = () => {
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

export default Homo;
