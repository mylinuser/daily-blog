import{_ as t,o as e,c as a,Q as r}from"./chunks/framework.d910ef6a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/taro.md","filePath":"interview/taro.md","lastUpdated":1694189773000}'),o={name:"interview/taro.md"},s=r('<h2 id="为什么使用taro" tabindex="-1">为什么使用Taro <a class="header-anchor" href="#为什么使用taro" aria-label="Permalink to &quot;为什么使用Taro&quot;">​</a></h2><p>小程序官方提供了 微信开发工具 作为开发编译工具，而对于代码本身没有提供一个类似 webpack 的工程化开发工具，来解决开发中的一些问题，所以小程序原生的开发方式显得不那么现代化，这也是很多小程序开发框架致力于解决的问题。例如，在小程序开发中</p><p><strong>不能使用 npm 管理依赖</strong>，在小程序中需要手动把第三方代码文件下载到本地，然后再 reuqire 进行使用，显得不那么优雅</p><p><strong>不能使用 Sass 等 CSS 预处理器</strong>，由于没有预编译的概念，小程序开发中无法使用市面上流行的 CSS 预处理器，这样会使得样式代码难以管理</p><p><strong>不完整的 ES Next 语法支持</strong>，小程序默认只能支持极少一部分 ES6 规范的语法，而 ES 是不断往前发展的，一些非常优秀的新语法特性就不能使用了</p><p><strong>手动的文件处理</strong>，像图片压缩、代码压缩等等的一些文件操作，必须手工来处理，显得有些繁琐</p>',6),n=[s];function _(i,p,c,d,l,S){return e(),a("div",null,n)}const f=t(o,[["render",_]]);export{m as __pageData,f as default};
