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
        type: parseFloat,
        required:true
     },
     
     
    
})

module.exports = apiModels




