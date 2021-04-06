const Router = require('koa-router');
const router = new Router();
const LoginRouter = require('./login/login')

router.get('/', async (ctx, next) => {
    ctx.body = "Hello koa";
})

router.use(LoginRouter.routes());

module.exports = router;