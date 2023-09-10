import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.82e0a936.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"practice/element-upload.md","filePath":"practice/element-upload.md","lastUpdated":1694189773000}'),n={name:"practice/element-upload.md"},o=r('<h2 id="element-ui-upload组件上传图片踩过的坑" tabindex="-1">element UI UpLoad组件上传图片踩过的坑 <a class="header-anchor" href="#element-ui-upload组件上传图片踩过的坑" aria-label="Permalink to &quot;element UI UpLoad组件上传图片踩过的坑&quot;">​</a></h2><p>后台Node通过<strong>multer实现图片上传，koa2有待了解。</strong></p><p>.文件上传有以下方法</p><ul><li><code>muilter.single(‘file’)</code>, //适用于单文件上传</li><li><code>muilter.array(‘file’,num)</code>, //适用于多文件上传，num为最多上传个数，上传文件的数量可以小于num,</li><li><code>muilter.fields(fields)</code>, //适用于混合上传，比如A类文件1个，B类文件2个。官方API有详细说明。</li></ul><p>**链接：**<a href="https://www.jianshu.com/p/31f00c164e9f" target="_blank" rel="noreferrer">https://www.jianshu.com/p/31f00c164e9f</a></p><p>**自己采用的方案，nodeJs与elementUI实现上传图片：**<a href="https://www.jianshu.com/p/e967fe9b06a4" target="_blank" rel="noreferrer">https://www.jianshu.com/p/e967fe9b06a4</a></p><p>**介绍详细的文章：1、**<a href="https://blog.csdn.net/qq_32849999/article/details/105073218" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_32849999/article/details/105073218</a></p><p>**2、**<a href="https://www.jianshu.com/p/cc219e2f0e8f" target="_blank" rel="noreferrer">https://www.jianshu.com/p/cc219e2f0e8f</a></p><p>**koa实现简单图片上传：**<a href="https://www.jianshu.com/p/901084d32de2" target="_blank" rel="noreferrer">https://www.jianshu.com/p/901084d32de2</a></p><p><strong>上传成功后的操作：</strong><a href="https://blog.csdn.net/weixin_48284431/article/details/117784965?utm_term=elementui%E4%B8%8A%E4%BC%A0%E5%AD%98blob%E5%9C%B0%E5%9D%80&amp;utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-0-117784965&amp;spm=3001.4430" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_48284431/article/details/117784965?utm_term=elementui上传存blob地址&amp;utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-0-117784965&amp;spm=3001.4430</a></p><p>**vue+elementui+nodejs koa实现图片的上传：**<a href="https://www.jianshu.com/p/70b317501632" target="_blank" rel="noreferrer">https://www.jianshu.com/p/70b317501632</a></p><h3 id="问题1-element-ui-上传图片组件-支持多传和单传-报错cannot-set-property-status-of-null" tabindex="-1">问题1：<strong>Element UI 上传图片组件（支持多传和单传），报错Cannot set property &#39;status&#39; of null</strong> <a class="header-anchor" href="#问题1-element-ui-上传图片组件-支持多传和单传-报错cannot-set-property-status-of-null" aria-label="Permalink to &quot;问题1：**Element UI 上传图片组件（支持多传和单传），报错Cannot set property &#39;status&#39; of null**&quot;">​</a></h3><p>解决：fileLIst是只读的，不能修改。我们这里使用uploadList来保存我们需要改动的数组，否则报错Cannot set property &#39;status&#39; of null</p><p>参考文献：<a href="https://blog.csdn.net/qq_32849999/article/details/105073218" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_32849999/article/details/105073218</a></p><h3 id="问题2-拿到后台的数据response直接push-报错-vue-warn-error-in-callback-for-watcher-filelist-typeerror-cannot-create-property-uid-on-string" tabindex="-1">问题2：拿到后台的数据response直接push，报错[Vue warn]: Error in callback for watcher &quot;fileList&quot;: &quot;TypeError: Cannot create property &#39;uid&#39; on string <a class="header-anchor" href="#问题2-拿到后台的数据response直接push-报错-vue-warn-error-in-callback-for-watcher-filelist-typeerror-cannot-create-property-uid-on-string" aria-label="Permalink to &quot;问题2：拿到后台的数据response直接push，报错[Vue warn]: Error in callback for watcher &quot;fileList&quot;: &quot;TypeError: Cannot create property &#39;uid&#39; on string&quot;">​</a></h3><p>解决：element ui做自定义上传时，返回的url地址要放到列表里边，如果直接push就会报错</p><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f17104d3-50b5-4782-a025-a226fbeafed9/Untitled.png" alt="Untitled"></p><p>所以正确写法应该是：传一个对象过去，name是你要展示的名字，就不会报错了。</p><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/280583fe-4ea0-475c-a32e-26c4ad6df3b5/Untitled.png" alt="Untitled"></p>',19),s=[o];function l(p,i,c,u,d,m){return t(),a("div",null,s)}const _=e(n,[["render",l]]);export{f as __pageData,_ as default};
