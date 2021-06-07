const {Schema,model , Types} = require('mongoose')

const schema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    owner:{type:Types.ObjectId,ref:'User'},
    date:{type:Date,default:Date.now}
})
module.exports = model('Card',schema)