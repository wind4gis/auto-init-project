#!/usr/bin/env node
/*
 * @Date: 2020-3-3 18:30:09
 * @LastEditors: Huang canfeng
 * @LastEditTime: 2020-03-05 18:30:21
 * @Description: 输入文件夹自动初始化对应的js和scss文件
 */
const { join, basename } = require("path");
const { writeFile, mkdirSync, existsSync } = require("fs");
const { from } = require("rxjs");
const { map, scan } = require("rxjs/operators");
const getContent = require("./config");

const { getJsContent, getScssContent } = getContent;

// 读取传入的文件夹参数
const [, , ...args] = process.argv;
// 读取当前的工作目录
const curFolder = process.cwd();

from(args)
  .pipe(
    // 返回合并后的目录
    map(cur => join(curFolder, cur)),
    // 判断指定的目录是否已经存在
    map(folder => {
      if (existsSync(folder)) return "";
      mkdirSync(folder);
      return folder;
    })
  )
  .subscribe(folder => {
    // 根据返回的目录执行具体的写文件操作
    if (!folder) {
      console.log("folder exists");
      return;
    }
    // 初始化index.js文件
    writeFile(join(folder, "index.js"), getJsContent(basename(folder)), err => {
      err && console.error(err);
    });
    // 初始化index.scss文件
    writeFile(join(folder, "index.scss"), getScssContent(), err => {
      err && console.error(err);
    });
  });
