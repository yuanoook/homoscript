import YouSee from './see';
import YouDo from './do';
import YouUse from './use';

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

export default Homo;
