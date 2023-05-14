const mongoose=require('mongoose');
mongoose.pluralize(null);
const { Schema } = mongoose;

const OrderSchema = new Schema({
 userId:{
     type:String,
     required:true
 },
products:[{
    productId:{type:String},
    quantity:{type:Number,default:1}
}],
address:{
    type:String,
    required:true
},
amount:{
    type:number,
    required:true
},
status:{
    type:String,
    default:"Pending",
    required:true
},

},{timestamps:true});
const Order=mongoose.model('order',OrderSchema)
Order.createIndexes();
module.exports=Order;