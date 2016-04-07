/**
 * Created by Administrator on 2016/4/7.
 */

"use strict";

let express = require('express');
let app = express();

app.route('/')
    .get(function(req,res){

        console.log(req.host);

        res.sendfile('./public/index.html');

    });

app.listen(3011,function(){
    console.log('strat listen 3011');
});