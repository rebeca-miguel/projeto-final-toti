const mongoose = require('mongoose')

const apiModels = mongoose.model('apiMOdels',{
    categoria:{
        type:String,
        required: true
     },
     titulo:{
        type: String,
        required: true
     },
     descricao:{
        type: String,
        required: true
     },
     preco:{
        type: Number,
        required:true
     },
     imageUrl:{
        type: String
     }
    
})

module.exports = apiModels




