exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  	createModule: function(str1, str2) {
    return {
      doNow: function() {
        return this.welcomeMsg + ', ' + this.name;
      },

      name: str2,
      welcomeMsg: str1
    };
  }
};
