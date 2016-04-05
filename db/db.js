/**
 * Created by CosticaTeodor on 04/04/16.
 */

//This file handles the connection, the getter for the connection and the closing of the connection;

var MongoClient = require('mongodb').MongoClient;
var connection;

var connect = function(url,done){
    if(connection){
        return done();
    }
        MongoClient.connect(url, function(err,db){
            if(err){
                return done(err);
            }
            connection = db; // DB? the db connection?
            done(); //pass the execution to te next middleware
        })
};

var get = function(done){
    return connection;
}

var close = function(done){
    if(connection){
        connection.close(function(err,result){
            connection = null;
            done(err); // how does this work?!
        });
    }
};

module.exports.connect = connect();
module.exports.get = get;
module.exports.close = close;


