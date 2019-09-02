const express = require("express")
const fs = require("fs")
const app = express()
//设置header
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  res.header("Access-Control-Allow-Methods", "application/json;charset=utf-8")
  res.header("Content-Type")
  next()
})
// console.log(process.argv, process.env.PORT)
//接口
const path = require("path")
filePath = path.join(__dirname, "/data")

let port = process.argv[2]
app.set("port", port || 9082)

let files = require("./readFile")
files.forEach(item => {
  let fileData = require(path.join(__dirname, "data", item))
  if (!fileData.url) return
  app.get(fileData.url, (req, res, next) => {
    let json = fileData.data
    let warpFn = require("./dataWrap")
    res.json(warpFn(json))
    next()
  })
})
const server = app.listen(app.get("port"), err => {
  if (err) {
    return console.log(err)
  }
  console.log("start on", server.address().port)
})
