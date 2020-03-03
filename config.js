/*
 * @Date: 2020-03-03 16:47:23
 * @LastEditors: Huang canfeng
 * @LastEditTime: 2020-03-03 20:28:21
 * @Description: 默认配置的文本内容
 */
module.exports = () => {
  const date = new Date();
  const N = "\n";
  const createDate = date.toLocaleDateString("zh").replace(/\//g, "-");
  const createTime = date.toLocaleTimeString("zh", { hour12: false });
  return `/*${N} * @Date: ${createDate} ${createTime}${
    N} * @LastEditors: Huang canfeng${
    N} * @LastEditTime: ${createDate} ${createTime}${
    N} * @Description:${
    N} */${
    N}import React, { memo, useCallback, useRef, useEffect } from "react";${
    N}import css from "./index.scss";${
    N}${
    N}const  = memo(props => {${
    N}  return ();${
    N}});${
    N}export default ;
    `;
};
