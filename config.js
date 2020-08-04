/*
 * @Date: 2020-03-03 16:47:23
 * @LastEditors: Huang canfeng
 * @LastEditTime: 2020-08-04 22:33:06
 * @Description: 配置后缀名以及对应的解析方法，可以生成指定默认后缀名的模板文件
 */
module.exports = [
  {
    ext: "js",
    parser: folder => { // 根据传入的目录名初始化Js文件
      const date = new Date();
      const N = "\n";
      const createDate = date.toLocaleDateString("zh").replace(/\//g, "-");
      const createTime = date.toLocaleTimeString("zh", { hour12: false });
      const [firstChar, ...restChar] = folder || "";
      const name = [String.prototype.toUpperCase.call(firstChar), ...restChar].join("");

      return `/*${N} * @Date: ${createDate} ${createTime}${
        N} * @LastEditors: Huang canfeng${
        N} * @LastEditTime: ${createDate} ${createTime}${
        N} * @Description:${
        N} */${
        N}import React, { memo, useCallback, useRef, useEffect } from "react";${
        N}import css from "./index.scss";${
        N}${
        N}const ${name} = memo(props => {${
        N}  return <></>;${
        N}});${
        N}export default ${name};${
        N}`;
    }
  },
  {
    ext: "scss",
    parser: () => { // 初始化Scss文件
      const N = "\n";
      return `.con {${
        N}${
        N}}${
        N}${
        N}.img {${
        N}${
        N}}${
        N}${
        N}.txt {${
        N}${
        N}}${
        N}`;
    }
  },
  {
    ext: "scss.d.ts",
    parser: () => { // 初始化Scss文件
      const N = "\n";
      return `declare namespace IndexScssNamespace {${
        N} export interface IIndexScss {${
        N}    con: string${
        N}    img: string${
        N}    txt: string${
        N}  }${
        N}}${
        N}declare const IndexScssModule: IndexScssNamespace.IIndexScss & {${
        N}  locals: IndexScssNamespace.IIndexScss;${
        N}}${
        N}export = IndexScssModule;${
        N}`;
    }
  },
  {
    ext: "tsx",
    parser: folder => { // 根据传入的目录名初始化Js文件
      const date = new Date();
      const N = "\n";
      const createDate = date.toLocaleDateString("zh").replace(/\//g, "-");
      const createTime = date.toLocaleTimeString("zh", { hour12: false });
      const [firstChar, ...restChar] = folder || "";
      const name = [String.prototype.toUpperCase.call(firstChar), ...restChar].join("");

      return `/*${N} * @Date: ${createDate} ${createTime}${
        N} * @LastEditors: Huang canfeng${
        N} * @LastEditTime: ${createDate} ${createTime}${
        N} * @Description:${
        N} */${
        N}import React, { FC, memo, useCallback, useRef, useEffect } from "react";${
        N}import css from "./index.scss";${
        N}${
        N}const ${name}: FC = memo(props => {${
        N}  return <></>;${
        N}});${
        N}export default ${name};${
        N}`;
    }
  },
];
