if(Strings.find().count() === 0){
  
  for(var j=0; j<3; j++){

    var eml = "test"+j+"@gmail.com";
    var nm = "test"+j;
    var pw = "testest"+j;
    console.log("eml: " + eml + " | pw:" + pw);
    
    var uId = Meteor.users.insert({
      email: eml,
      username: nm,
      info: pw
    });
    Accounts.setPassword(uId, pw);
    
    // userId

    for (var i=0; i< 5; i++){
      Strings.insert({
        userId: uId,
        title: nm+"\'s String: " + i,
        url: "http://google.com/"+i,
        description: "This is string number: #" + i
      });
    }

  }
};
