# 自建 mock 数据服务

## 服务启动框架

express, nodemon

## 项目说明

npm start 启动服务，在 data 文件夹下创建 mock 数据，dataWrap 定义了接口返回数据的格式

### nodemon 配置

```json
{
  "restartable": "rs", //启动模式
  "ignore": [".git", "node_modules/**/node_modules"], //热启动忽略文件
  "verbose": true, //设置日志输出模式， true为详细模式
  "execMap": {
    //设置运行服务的后缀名与对应的命令
    "js": "node --harmony"
  },
  "events": {
    //表示nodemon运行到某个时刻触发的事件 （start,crash,exit,restart,）
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": ["test/fixtures/", "test/samples/"], //监控的文件路径
  "env": {
    //运行环境
    "NODE_ENV": "development"
  },
  "ext": "js,json" //指定监控文件的后缀名
}
```
