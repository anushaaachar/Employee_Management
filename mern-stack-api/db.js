const mongoose = require('mongoose')
// mongosh "mongodb+srv:/anusha/cluster0.33gpzme.mongodb.net/postEmployeeDB" --apiVersion 1 --username Anusha

mongoose.connect('mongodb+srv://Anusha:anusha@cluster0.33gpzme.mongodb.net/postEmployeeDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })