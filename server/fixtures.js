if(Strings.find().count() === 0){
  
  for (var i=0; i< 5; i++){
    Strings.insert({
      title: "String " + i,
      url: "http://google.com/"+i,
      description: "This is string number: #" + i
    })
  }
};
