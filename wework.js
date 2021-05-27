
const crypto = require('crypto');
const axios = require("axios")
const wework = {}

const wework_key = process.env.WEWORK_KEY
const wework_api = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=" + wework_key

console.log("Get wework_key",wework_key);

wework.sendmarkdown = (str) => {
  axios.post(wework_api,{
    "msgtype" : "text",
    "text" : {
      "content" : str
    }
  },{
    proxy : false,
    headers: {'Content-Type': 'application/json'},
  }).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.error(err);
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
    proxy : false,
    headers: {'Content-Type': 'application/json'},
  }).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.error(err);
  })
}

module.exports = wework;
