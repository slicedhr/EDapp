module.exports = {

   login: function (req, res) {

    var email = req.param('email');

    var password = req.param('password');

    if (!email || !password)
      return res.json(401, {err: 'email and password required'});

    User.findOne({ email: email }, function (err, user) {

      if (!user)
        return res.json(401, {err: 'invalid email or password'});

      User.comparePassword(password, user, function (err, valid) {

        if (err)
          return res.json(err);

        if (!valid)
          return res.json(401, {err: 'invalid email or password'});

        else {

          sails.users[tokenauth.issue({id : user.id })] = user.id

          req.session.user = user

          res.json({

            user: user,

            token: tokenauth.issue({id : user.id })

          });
        }

      });

    })

  },

  verify: function(req, res){

    tokenauth.verify(req.param('token'), function (err, token) {

      if (err) return res.send(401, {err: 'Invalid Token!'});

      req.token = token;

      if (token)

        User.findOne({ id: token.id }).exec(function (err, user){

          sails.users[tokenauth.issue({id : user.id })] = user.id

          req.session.user = user

          if(err) return res.send(501, {err: 'Error find user!'})

          return res.json(200, {user: user})
        
        })

      else
        return res.send(501, { err: 'Unauthorized'})
      

    });

  },

  logout: function(req, res){

    req.session.user = undefined;

    req.token = undefined;

    return res.send({ logout: true })

  },

};