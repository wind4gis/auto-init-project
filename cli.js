#!/usr/bin/env node
/*
 * @Date: 2020-3-3 18:30:09
 * @LastEditors: Huang canfeng
 * @LastEditTime: 2020-08-04 22:28:29
 * @Description: 输入文件夹自动初始化对应的js和scss文件
 */
const { join, basename } = require("path");
const { writeFile, mkdirSync, existsSync } = require("fs");
const { from } = require("rxjs");
const { map } = require("rxjs/operators");
const parserConfig = require("./config");

// 读取传入的文件夹参数
const [, , ...args] = process.argv;
// 读取当前的工作目录
const curFolder = process.cwd();

let folderArgs = [],
	force = false,
	tsx = false;

folderArgs = args.reduce((total, cur) => {
	if (!~cur.indexOf("-")) {
		total.push(cur);
	} else if (cur === "--tsx") {
		tsx = true;
	} else if (cur === "-f") {
		force = true;
	}
	return total;
}, []);

from(folderArgs)
	.pipe(
		// 返回合并后的目录
		map((cur) => join(curFolder, cur)),
		// 判断指定的目录是否已经存在
		map((folder) => {
			if (existsSync(folder)) return force ? folder : "";
			mkdirSync(folder);
			return folder;
		})
	)
	.subscribe((folder) => {
		// 根据返回的目录执行具体的写文件操作
		if (!folder) {
			console.log("folder exists");
			return;
		}
		const curParserConfig = tsx
			? parserConfig.filter((item) => ["tsx", "scss", "scss.d.ts"].includes(item.ext))
			: parserConfig.filter((item) => ["js", "scss"].includes(item.ext));
		// 根据配置文件里指定的文件后缀名以及模板内容，生成对应的文件
		curParserConfig.forEach(({ ext, parser }) => {
			writeFile(join(folder, `index.${ext}`), parser(basename(folder)), (err) => {
				err && console.error(err);
			});
		});
	});
