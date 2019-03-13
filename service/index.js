const Koa = require('koa')
const app = new Koa()
const {connect, initSchemas} = require('./database/init')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const cors = require('koa2-cors')

let user = require('./appApi/user')

//  装载所有子路由
let router = new Router()
router.use('/user', user.routes())

//  加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

//  接受post请求
app.use(bodyParser())

//支持跨域
app.use(cors())

// ;(async () => {
//   await connect()
//   initSchemas()
//   const User = mongoose.model('User')
//   let oneUser = new User({userName: 'wangxb1', password: '123456'})
//   oneUser.save().then(() => {
//     console.log('插入成功')
//   })
//   let user = await User.findOne({}).exec()
//   console.log(user)
// })()

app.use(async (ctx) => {
  ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000, () => {
  console.log('[server] start at port 3000')
})
