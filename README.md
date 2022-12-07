# MBTI-test

Simple MBTI online test, providing a direct result that you can reference later. 简单的MBTI职业性格测试。

[Demo](https://vivi-wu.github.io/MBTI-test/)

## 关于编译

HandlebarJS 官网上说：

It is also possible to precompile your templates. This will result in a smaller required **runtime** library and significant savings from not having to compile the template in the browser. This can be especially important when working with mobile devices.

这里 <code>choice.handlebars</code> 模版文件的编译结果是 <code>choice.js</code>，具体实现方法参考[官方文档](https://handlebarsjs.com/precompilation.html)
