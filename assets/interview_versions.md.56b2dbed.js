import{_ as e,o,c as t,Q as s}from"./chunks/framework.d910ef6a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/versions.md","filePath":"interview/versions.md","lastUpdated":1694189773000}'),c={name:"interview/versions.md"},a=s('<h2 id="版本号区别" tabindex="-1">版本号区别 <a class="header-anchor" href="#版本号区别" aria-label="Permalink to &quot;版本号区别&quot;">​</a></h2><p>~、^、*</p><p>• <code>~</code>会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0</p><p>• <code>^</code>会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0</p><p>那么该如何选择呢？当然你可以指定特定的版本号，直接写1.2.3，前面什么前缀都没有，这样固然没问题，但是如果依赖包发布新版本修复了一些小bug，那么需要手动修改<code>package.json</code>文件；<code>~</code>和<code>^</code>则可以解决这个问题。</p><p>但是需要注意**<code>^</code>版本更新可能比较大**，会造成项目代码错误，所以<strong>建议使用<code>~</code>来标记版本号</strong>，这样可以保证项目不会出现大的问题，也能保证包中的小bug可以得到修复。</p><p>版本号写<code>*</code>，这意味着<strong>安装最新版本的依赖包</strong>，但缺点同上，可能会造成版本不兼容，<strong>慎用</strong>！</p>',7),r=[a];function n(d,i,_,p,l,h){return o(),t("div",null,r)}const f=e(c,[["render",n]]);export{m as __pageData,f as default};
