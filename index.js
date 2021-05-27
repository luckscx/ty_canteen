const express = require('express')
const app = express()
const port = 8096
const wework = require('./wework.js')
const make_img = require('./make_img.js')

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.post('/sit', (req, res) => {
  const obj = req.body
  const job = async () => {
    const img_buf = await make_img.create(obj)
    wework.sendmarkdown(`${obj.n}已选择座位`)
    wework.sendimg(img_buf)
    res.json("")
  };

  job()
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
