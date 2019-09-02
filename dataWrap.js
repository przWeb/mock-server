const wrap = {
  result: 1,
  msg: "成功"
}
const warpFn = function(data) {
  if (typeof data === "undefined") {
    data = null
  }
  const dataJson = {
    data: data
  }
  return Object.assign({}, wrap, dataJson)
}
module.exports = warpFn
