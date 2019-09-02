const Mock = require("mockjs")
const data = Mock.mock({
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1
    }
  ]
})
const t = {
  // data,
  url: "/test"
}

module.exports = t
