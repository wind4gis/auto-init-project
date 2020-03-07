/*
 * @Date: 2020-03-03 16:47:23
 * @LastEditors: Huang canfeng
 * @LastEditTime: 2020-03-05 18:32:47
 * @Description: 默认配置的文本内容
 */
module.exports = {
  /**
   * @name: 根据传入的目录名初始化Js文件
   */
  getJsContent: folder => {
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
  },

  /**
   * @name: 初始化Scss文件
   */  
  getScssContent: () => {
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
}
