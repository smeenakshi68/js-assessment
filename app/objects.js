exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
	return fn.sayIt.call(obj);
  },

 alterObjects: function(constructor, greeting) {
  	var fn = function (greeting) {
  constructor.prototype.greeting = greeting;
};
  },

  iterate: function(obj) {
  	var fn = function (obj) {
  var ownProp = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ownProp.push(prop + ': ' + obj[key]);
    }
  }
  return ownProp;
};

  }
};





