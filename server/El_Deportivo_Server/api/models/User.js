/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	id: {

      type: 'integer',

      primaryKey: true,

      autoIncrement: true

    }, 

    name: 'text',

    email: 'text',
    
    password: 'text',
  	
  	permissions: 'json',
    
    addicional_data: 'json',

    toJSON: function(){

      var obj = this.toObject();

      delete obj.password;

      return obj;

    },

  },
  
  beforeCreate: function(data, cb) {

    PasswordService.hash(data.password, function(hash){

      data.password = hash;

      cb();
      
    })
    
  },

  beforeUpdate: function(data, cb) {

    if(data.password)

      PasswordService.hash(data.password, function(hash){

        data.password = hash;

        cb();

      })

    else 
      return cb();

  },
  comparePassword : function (password, user, cb) {

    if (PasswordService.validate(password, user.password))
      cb(null, true);

    else
      cb({ err: 'No coinciden' })

    }
  
};

