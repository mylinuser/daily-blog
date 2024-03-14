import{_ as e,o as t,c as i,Q as a}from"./chunks/framework.d910ef6a.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/performance-optimization.md","filePath":"interview/performance-optimization.md","lastUpdated":1694189773000}'),o={name:"interview/performance-optimization.md"},l=a('<p><a href="https://juejin.cn/post/6892994632968306702" target="_blank" rel="noreferrer">https://juejin.cn/post/6892994632968306702</a></p><h2 id="请求相关" tabindex="-1">请求相关 <a class="header-anchor" href="#请求相关" aria-label="Permalink to &quot;请求相关&quot;">​</a></h2><ol><li><p>减少 http</p></li><li><p>请求使用 https</p></li><li><p>设置缓存，强缓存，协商缓存</p></li></ol><h2 id="css相关" tabindex="-1">CSS相关 <a class="header-anchor" href="#css相关" aria-label="Permalink to &quot;CSS相关&quot;">​</a></h2><ol start="4"><li><p>将 CSS 放在文件头部，JavaScript 文件放在底部</p></li><li><p>减少重排重绘</p></li><li><p>降低 css 选择器的复杂性</p></li><li><p><strong>避免使用table布局</strong>，tables中某个元素一旦触发reflow就会导致table里所有的其它元素reflow。可以设置table-layout:auto;或者是table-layout:fixed这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围</p></li><li><p><strong>避免不必要的复杂的 CSS 选择器</strong>，尤其是后代选择器（descendant selectors），因为为了匹配选择器将耗费更多的 CPU</p></li><li><p><strong>css里不要有表达式expression</strong> (例如：calc())</p></li><li><p><strong>避免设置多层内联样式</strong></p></li></ol><h2 id="资源相关" tabindex="-1">资源相关 <a class="header-anchor" href="#资源相关" aria-label="Permalink to &quot;资源相关&quot;">​</a></h2><ol start="11"><li><p>静态资源使用 CDN</p></li><li><p>使用字体图标 iconfont 代替图片图标</p></li><li><p>压缩文件，css(<code>MiniCssExtractPlugin</code>),js(<code>UglifyPlugin</code>),html(<code>html-webpack-plugin</code>)文件压缩，清除无用的代码，<code>tree-shaking</code>（需要 es6 的 import 才支持），gzip 压缩(<code>compression-webpack-plugin</code>)</p></li><li><p>splitChunks 分包配置，optimization.splitChunks 是基于 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fplugins%2Fsplit-chunks-plugin%2F" target="_blank" rel="noreferrer">SplitChunksPlugin</a> 插件实现的</p></li><li><p>图片优化、图片压缩</p></li><li><p>webpack 按需加载代码，<code>hash</code>，<code>contenthash</code></p></li></ol>',7),r=[l];function n(p,s,c,d,h,_){return t(),i("div",null,r)}const m=e(o,[["render",n]]);export{f as __pageData,m as default};