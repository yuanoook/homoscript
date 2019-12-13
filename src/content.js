import Homo from './homo/index';

export const Search = query => {
  Homo
    .YouDo('scroll_to_top')
    .YouSee('input')
    .YouDo('highlight')
    .YouSee({
      type: 'input',
      desc: {
        type: 'text',
        value: v => v !== query,
      },
    })
    .YouUse(query)
    .YouDo('input')
    .YouDo('submit');
};

export default Homo;
