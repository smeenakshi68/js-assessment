exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (init, end) {
    var timeout;
    function doNow () {
      console.log(init++);
      if (init <= end) {
        timeout = setTimeout(doNow,10);
      }
    }
    doNow();
    return {
      terminate: function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};