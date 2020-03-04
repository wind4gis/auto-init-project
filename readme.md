# 背景

在初始化项目时，经常会有创建多个文件夹并初始化文件，添加上默认内容的操作。这些工作不会很难但是很繁琐，浪费时间。通过使用该工具，绑定了全局ifl快捷键，可以识别输入的路径参数并自动创建目录，以及在`config.js`里写的默认模板

# 使用

下载之后通过执行`npm i . -g`可以全局安装，然后通过在对应的文件目录下执行`ifl src test`命令，就可以在当前目录下创建src和test文件夹，同时分别创建对应的初始化js和scss文件