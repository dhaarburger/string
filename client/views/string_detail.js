Template.stringDetail.helpers({
  strings: function() {
    return Strings.find({stringId: this._id});
  },
  pages: function(){
		return Pages.find();
  },
  pageId: function(){
  	if (Router.current().params.pageId) return Router.current().params.pageId;
  	else return "NOTHING";
  },
  activePage: function(){
  	if (Router.current().params.pageId) {
  		// console.log(this._id);
  		if (this._id === Router.current().params.pageId){
  			console.log('SUCESSS: ' + this._id);
  			return true;
  		}
  }
  	else {
  		console.log('could not find page id');
  		return false;
  	}
  }

});

Template.stringDetail.rendered = function(){
	console.log('params:', Router.current().params);
	console.log('pageId:', Router.current().params.pageId);

};