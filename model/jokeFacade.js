/**
 * Created by CosticaTeodor on 04/04/16.
 */

// for working on the db we obviously need the connection with us
    // CRUD operations on a MongoDb
var  connect = require("../db/db");

function _allJokes(callback){
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

function _findJoke(callback, id){
    var db = connect.get();
    db.collection("jokes").find( { _id: id }).toArray(function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

function _addJoke(joke,callback){
    var db = connect.get();
    db.collection("jokes").insertOne(joke,function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,"The joke has been successufly added: " + data);
        }
    })
}

function _editJoke(id,jokeToEdit, callback){
    var db = connect.get();
    db.collection("jokes").updateOne({"_id": id},jokeToEdit,function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null,"The jokes has been sucessuflly edited " + data);
        }
    })
}

function _deleteJoke(id,callback){
    var db = connect.get();
    db.collection("jokes").deleteOne({"_id": id}, function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null,'Joke was succesfully deleted'+data);
        }
    });
}

exports.allJokes = _allJokes;
exports.findJoke = _findJoke;
exports.addJoke = _addJoke;
exports.editJoke = _editJoke;
exports.deleteJoke = _deleteJoke;