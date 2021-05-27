
const crypto = require('crypto');
const axios = require("axios")
const wework = {}

const wework_key = ""
const wework_api = "http://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=" + wework_key

wework.sendmarkdown = (str) => {
  axios.post(wework_api,{
    "msgtype" : "markdown",
    "markdown" : {
      "content" : str
    }
  },{
    proxy : false
  })
}

wework.sendimg = (img_buf) => {
  const base64_data = img_buf.toString('base64')
  const hash = crypto.createHash('md5')
  hash.update(img_buf)
  const md5 = hash.digest('hex')
  axios.post(wework_api,{
    "msgtype" : "image",
    "image" : {
      "base64" : base64_data,
      "md5" : md5
    }
  },{
    proxy : false
  })
}

module.exports = wework;
