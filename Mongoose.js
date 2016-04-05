/**
 * Created by CosticaTeodor on 05/04/16.
 */


var User = require('./model/user');

var tomBrady = new User({
    name: 'Tom Brady',
    username: 'tomBrady',
    password: 'new12England'
});

var newUser = User({
    name: 'Bente Andersen',
    username: 'ba',
    password: 'scoopee87Doo',
    admin: true
});

newUser.save(function (err) {
    if (err) {
        throw err;
    }
    console.log('User created!');
});

tomBrady.dudify(function (err, name) {
    if (err) {
        throw err;
    }
    console.log('Your new name is: ' + name);
});

tomBrady.save(function (err) {
    if (err) {
        throw err;
    }
    console.log('User saved successfully!');
});


//find all
User.find({}, function (err, users) {
    if (err) {
        throw err;
    }
    console.log(users);
});

//find one
User.find({username: 'ba'}, function (err, user) {
    if (err) {
        throw err;
    }
    console.log(user);
});

//find by id
User.findbyId(1, function (err, user) {
    if (err) {
        throw err;
    }
    console.log(user);
});

// get any admin that was created in the past month

// get the date 1 month ago
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({admin: true}).where('created_at').gt(monthAgo).exec(function (err, users) {
    if (err) {
        throw err;
    }
    console.log(users);
});

//update - GET A USER, THEN UPDATE
User.findbyId(1, function (err, user) {
    if (err) {
        throw err;
    }
    user.location = 'uk';

    user.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('User successfully updated!');
    });
});

//update - FIND AND UPDATE
User.findOneAndUpdate({username: 'ba'}, {username: 'benteA'}, function (err, user) {
    if (err) {
        throw err;
    }
    console.log(user);
});

//update - FIND BY ID AND UPDATE
User.findByIdAndUpdate(4, {username: 'benteA'}, function (err, user) {
    if (err) {
        throw err;
    }
    console.log(user);
});

//delete - GET A USER, THEN REMOVE
User.find({username: 'ba'}, function (err, user) {
    if (err) {
        throw err;
    }
    user.remove(function (err) {
        if (err) {
            throw err;
        }
        console.log('User successfully deleted!');
    });
});

//delete - FIND AND REMOVE
User.findOneRemove({username: 'ba'}, function (err) {
    if (err) {
        throw err;
    }
    console.log('User deleted!');
});

//delete - FIND BY ID AND REMOVE
User.findByIdAndRemove(4, function (err) {
    if (err) {
        throw err;
    }
    console.log('User deleted!');
});