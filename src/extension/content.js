import Homo, { read } from '../homo/index';

export const Search = query => {
  Homo
    .YouSee('window')
    .YouDo('scroll_to_top_left')
    .YouSee('input')
    .YouDo('highlight')
    .YouSee({
      type: 'input',
      desc: {
        type: /text|search/,
        value: v => v !== query,
      },
    })
    .YouUse(query)
    .YouDo('input')
    .YouDo('submit');
};

export const Start = text => {
  const scripts = unescape(text);
  read(scripts);
};

export default Homo.default || Homo;
