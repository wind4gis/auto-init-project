/*
 * @Date: 2020-03-03 16:47:23
 * @LastEditors: Huang canfeng
 * @LastEditTime: 2020-03-03 17:33:32
 * @Description: 默认配置的文本内容
 */
module.exports = () => {
  const date = new Date();
  const N = "\n";
  const createDate = date.toLocaleDateString("zh").replace(/\//g, "-");
  const createTime = date.toLocaleTimeString("zh", { hour12: false });
  return `/*${N} * @Date: ${createDate} ${createTime}${N} * @LastEditors: Huang canfeng${N} * @LastEditTime: ${createDate} ${createTime}${N} * @Description:${N} */${N}`;
};
