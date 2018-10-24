const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/commerce_manager",{useNewUrlParser:true}, (errs)=>errs?console.log(errs):console.log('db connected and doing great work and stuff'))

ProductSchema = new mongoose.Schema({
  title:{
    required:true,
    type:String,
    minlength:3
  },
  qty:{
    required:true,
    type:Number,
    min: [0, 'Must be postive!!!!!:('],
  },
  price:{
    required:true,
    type:Number,
  }
}, {timestamps:true})

module.exports = mongoose.model('Product', ProductSchema)
