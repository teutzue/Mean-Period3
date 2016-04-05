/**
 * Created by CosticaTeodor on 04/04/16.
 */

var express = require('express');
var jokes = require('../model/jokeFacade');
var router = express.Router();

//Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware
// and routing system; for this reason, it is often referred to as a “mini-app”.

//Rest API to get jokes

router.get("/jokes", function(req,res,next){
    jokes.allJokes(function(err,data){
        if(err){
            throw new Error(err)
        }else{
            res.json({jokes:data});
        }
    })
});

router.get("/joke/random", function(req,res,next){
    jokes.allJokes(function(err,data){
        if(err){
            throw new Error(err)
        }else{
            // Not the most efficiant, but it works.
            var randomNumber = Math.floor(Math.random() * data.length);
            res.json({randomJoke : data[randomNumber]});
        }
    })
});

router.get("/findjoke/:id", function(req,res,next){
    jokes.findJoke(req.params.id, function(err,data){
        if(err){
            throw new Error;
        }else{
            res.json({joke: data[0]});
        }
    })
});

router.post("/addJoke/",function(req,res, next){
    var newjoke = req.body;
    newjoke.lastEdited = new Date(); // add an attribute to the joke prototype
    jokes.addJoke(newjoke);
    res.json({joke: newjoke});
});


router.put("/editJoke/:id", function(req, res, next){               // edit a Joke
    jokes.editJoke(req.params.id, req.body, function(err,data){
        if(err){
            throw new Error(err);
        }
        res.json({editedJoke: data})
    })
});

router.delete("/deleteJoke/:id", function(req, res, next){
    jokes.deleteJoke(req.params.id, function(err,data){
        if(err){
            throw new Error(err);
        }
        res.json({deletedJoke: data})
    })
});

module.exports = router;