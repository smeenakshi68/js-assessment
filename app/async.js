exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var dfd = $.Deferred();
  	var timOutfn = function(){
  		dfd.resolve(true);
  	},5);
return dfd.promise();
},

  manipulateRemoteData: function(url) {
  	var dfd = $.Deferred();

    $.ajax({
    	url: url
    }).then(function(response) {
    	var peopleArr = [];
    	for(var person in peopleArr){
    		peopleArr.push(response.people[person].name);
    	}
      dfd.resolve(peopleArr.sort());
    });

    return dfd.promise();
  }
};

