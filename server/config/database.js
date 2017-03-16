module.exports = function (mongoose){
  mongoose.connect('mongodb://adim:admin@ds029456.mlab.com:29456/cosedafare', function(err){
    if(err){console.log(err);}else{console.log("connesso al db");}
  });
};
////USERS CHIAMATO ADIM!!!!!!!!!!!!!!!!!!!!!!
