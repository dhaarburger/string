Template.stringDetail.helpers({
  strings: function() {
    return Strings.find({stringId: this._id});
  }
});