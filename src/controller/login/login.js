class LoginController {
  /**
   * 获取验证码
   * @param {*} ctx 
   * @param {*} next 
   */
  async sendValidCode(ctx, next) {
    // 图片验证码返回的是一张图片
    ctx.body = {}
  }

  /**
   * 登录
   * @param {*} ctx 
   * @param {*} next 
   */
  async fetchLogin(ctx, next) {
    // 获取参数
    let request = ctx.request;
    // console.log(request.query); // { aid: '123', name: 'zhangsan' }  对象
    // console.log(request.querystring); // aid=123&name=zhangsan

    // 成功返回的data
    const data = {

    }

    // 失败返回的data
    // {
    //   "code": 10005,
    //   "message": "图片验证码已失效，请重新获取验证码",
    //   "data": "",
    //   "timestamp": 1609379969731,
    //   "isSuccess": false
    // }

    ctx.body = data

  }

  /**
   * 获取用户信息
   * @param {*} ctx 
   * @param {*} next 
   */
  async getUserInfo(ctx, next) {

    // 成功返回的data
    const data = {
      "code": 10200,
      "message": "成功",
      "data": {
        "userId": "00ptxxx1449864659650350888671007",
        "userName": "欧阳杏棠",
        "nickName": null,
        "avatar": null,
        "gender": "男",
        "phoneNumber": "13825555888",
        "identityCard": "",
        "nation": null,
        "ancestral": null,
        "background": null,
        "email": "873668875@qq.com"
      },
      "timestamp": 1609380057895,
      "isSuccess": true
    }

    ctx.body = data
  }
}

module.exports = new LoginController();