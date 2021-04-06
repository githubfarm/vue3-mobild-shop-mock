const Router = require('koa-router');
const router = new Router();
const LoginController = require('../../controller/login/login')

router.post('/oauth-zt/oauth/notoken/sendValidCode',LoginController.sendValidCode);
router.post('/oauth-zt/notoken/oauth/login', LoginController.fetchLogin);
router.get('/platform-user-center/ztSysUserInfo/getUserInfo', LoginController.getUserInfo);

module.exports = router;