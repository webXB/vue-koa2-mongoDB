const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')    //  密码加盐加密
const SALT_WORK_FACTOR = 10   //  加盐位数

let ObjectId = Schema.Types.ObjectId


//  创建UserSchema
const userSchema = new Schema({
  UserId : ObjectId,
  userName : {unique: true, type: String},
  password: String,
  createAt: {type: Date, default: Date.now()},
  lastLoginAt: {type:Date, default: Date.now()}
})

userSchema.pre('save', function(next){
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => { //加盐
    if (err) return next(err)
    bcrypt.hash(this.password, salt, (err, hash)=> { //  加密
      if(err) return next(err)
      this.password = hash
      next()
    })
  })
})
//  发布模型
mongoose.model('User', userSchema)
