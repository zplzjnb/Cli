#! /usr/bin/env node

// 用来把异步对象包装成promise对象
let Promise = require('bluebird')
// 经过封装的node fs模块 更方便使用
let fs = Promise.promisifyAll(require('fs-extra'))
// 用来执行命令封装包
let program = require('commander')
// 输出有颜色的内容
let chalk = require('chalk')
// 取得包版本号
let _v = require('../package.json').version;

program
.version(_v)
.usage('tf-npm-cli name')
.parse(process.argv)

// 获取templates在全局下的路径
let tem = __dirname.replace('bin', '') + 'templates';
// 拿到命令行输入的参数
let newPath = program.args[0];
function generator(dest) {
  // 最核心，拷贝到目标文件夹中
  console.log('creating code...');
  return fs.copyAsync( tem, dest, {
    clobber: true
  })
    .then(() => {
      // 删除copy过来的 node_modules 和 dist 文件夹，一般我们不把这两个包放到 templates 目录下，那以下这两句命令也就不起作用
      fs.removeSync(`${dest}/node_modules`);
      fs.removeSync(`${dest}/dist`);
      console.log(chalk.green(`success!\n`))
    })
    .catch(err => console.log(chalk.red(`cd ${err}`)))
}

generator(newPath);