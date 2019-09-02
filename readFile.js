let fs = require("fs")
let path = require("path")
filePath = path.join(__dirname, "/data")
// function getDataContent(dir) {
let file = fs.readdirSync(filePath)
let targets = file.filter(item => {
  return path.extname(item) === ".js"
})
// fs.readdir(dir, (err, files) => {
//   if (err) {
//     console.warn(err)
//   } else {
//     files.forEach(item => {
//       let targetFilePath = path.join(filePath, item)
//       fs.stat(targetFilePath, (err, stat) => {
//         if (err) {
//           console.warn("获取文件stats 错误")
//         } else {
//           const isFile = stat.isFile()
//           const isDir = stat.isDirectory()
//           if (isDir) {
//             getDataContent(targetFilePath)
//           }
//           if (isFile) {
//             console.log(targetFilePath)
//             let content = fs.readFileSync(targetFilePath, "utf-8")
//             console.log(content)
//             // contents.push(content)
//           }
//         }
//       })
//     })
//   }
// })
// }
// let contents = getDataContent(filePath)
module.exports = targets
