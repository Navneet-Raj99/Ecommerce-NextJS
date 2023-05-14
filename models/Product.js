const mongoose=require('mongoose');
mongoose.pluralize(null);
const { Schema } = mongoose;

const ProductSchema = new Schema({
 title:{
     type:String,
     required:true
 },
 slug:{
    type:String,
    required:true,
    unique:true
},
desc:{
    type:String,
    required:true,
    
},
img:{
    type:String,
    required:true,
    
},
size:{
    type:String,
    
},
category:{
    type:String,
    required:true,
    
},

color:{
    type:String
},
price:{
    type:Number,
    required:true
},
availableQty:{
    type:Number,
    required:true
}

},{timestamps:true});
mongoose.models={};
const Product=mongoose.model('product',ProductSchema)

module.exports=Product;