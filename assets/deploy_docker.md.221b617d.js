import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.d910ef6a.js";const b=JSON.parse('{"title":"Docker&Jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"deploy/docker.md","filePath":"deploy/docker.md","lastUpdated":1694189773000}'),l={name:"deploy/docker.md"},o=n(`<h1 id="docker-jenkins" tabindex="-1">Docker&amp;Jenkins <a class="header-anchor" href="#docker-jenkins" aria-label="Permalink to &quot;Docker&amp;Jenkins&quot;">​</a></h1><h4 id="温馨提醒-docker内核版本必须是3-10-以上的版本" tabindex="-1">温馨提醒，docker内核版本必须是3.10+以上的版本 <a class="header-anchor" href="#温馨提醒-docker内核版本必须是3-10-以上的版本" aria-label="Permalink to &quot;温馨提醒，docker内核版本必须是3.10+以上的版本&quot;">​</a></h4><p>您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;"># https://cr.console.aliyun.com/cn-shenzhen/instances/mirrors</span></span>
<span class="line"><span style="color:#dbd7caee;">sudo mkdir -p /etc/docker</span></span>
<span class="line"><span style="color:#dbd7caee;">sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span style="color:#dbd7caee;">{</span></span>
<span class="line"><span style="color:#dbd7caee;">  &quot;registry-mirrors&quot;: [&quot;https://tdlm5cc1.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span style="color:#dbd7caee;">}</span></span>
<span class="line"><span style="color:#dbd7caee;">EOF</span></span>
<span class="line"><span style="color:#dbd7caee;">sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#dbd7caee;">sudo systemctl restart docker</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;"># https://cr.console.aliyun.com/cn-shenzhen/instances/mirrors</span></span>
<span class="line"><span style="color:#393a34;">sudo mkdir -p /etc/docker</span></span>
<span class="line"><span style="color:#393a34;">sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span style="color:#393a34;">{</span></span>
<span class="line"><span style="color:#393a34;">  &quot;registry-mirrors&quot;: [&quot;https://tdlm5cc1.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span style="color:#393a34;">}</span></span>
<span class="line"><span style="color:#393a34;">EOF</span></span>
<span class="line"><span style="color:#393a34;">sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#393a34;">sudo systemctl restart docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="查看方式" tabindex="-1">查看方式 <a class="header-anchor" href="#查看方式" aria-label="Permalink to &quot;查看方式&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">uname -r</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">uname -r</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="卸载老版本的-docker-及其相关依赖" tabindex="-1">卸载老版本的 docker 及其相关依赖 <a class="header-anchor" href="#卸载老版本的-docker-及其相关依赖" aria-label="Permalink to &quot;卸载老版本的 docker 及其相关依赖&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo yum remove docker docker-common container-selinux docker-selinux docker-engine</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo yum remove docker docker-common container-selinux docker-selinux docker-engine</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="更新yum" tabindex="-1">更新yum <a class="header-anchor" href="#更新yum" aria-label="Permalink to &quot;更新yum&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">yum update -y</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">yum update -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-yum-utils-它提供了-yum-config-manager-可用来管理yum源" tabindex="-1">安装 yum-utils，它提供了 yum-config-manager，可用来管理yum源 <a class="header-anchor" href="#安装-yum-utils-它提供了-yum-config-manager-可用来管理yum源" aria-label="Permalink to &quot;安装 yum-utils，它提供了 yum-config-manager，可用来管理yum源&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo yum install -y yum-utils</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo yum install -y yum-utils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="添加yum源" tabindex="-1">添加yum源 <a class="header-anchor" href="#添加yum源" aria-label="Permalink to &quot;添加yum源&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="更新索引" tabindex="-1">更新索引 <a class="header-anchor" href="#更新索引" aria-label="Permalink to &quot;更新索引&quot;">​</a></h2><h3 id="centos7" tabindex="-1">centos7 <a class="header-anchor" href="#centos7" aria-label="Permalink to &quot;centos7&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo yum makecache fast</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo yum makecache fast</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="centos8" tabindex="-1">centos8 <a class="header-anchor" href="#centos8" aria-label="Permalink to &quot;centos8&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo yum makecache</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo yum makecache</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-docker-ce" tabindex="-1">安装 docker-ce <a class="header-anchor" href="#安装-docker-ce" aria-label="Permalink to &quot;安装 docker-ce&quot;">​</a></h2><p>centos8 需要先安装依赖包，centos7可直接跳过下面两步直接安装docker-ce</p><h4 id="获取rpm" tabindex="-1">获取rpm <a class="header-anchor" href="#获取rpm" aria-label="Permalink to &quot;获取rpm&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">wget https://download.docker.com/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">wget https://download.docker.com/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">yum -y install containerd.io-1.2.6-3.3.el7.x86_64.rpm</span></span>
<span class="line"><span style="color:#dbd7caee;">sudo yum install -y docker-ce</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">yum -y install containerd.io-1.2.6-3.3.el7.x86_64.rpm</span></span>
<span class="line"><span style="color:#393a34;">sudo yum install -y docker-ce</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="启动-docker" tabindex="-1">启动 docker <a class="header-anchor" href="#启动-docker" aria-label="Permalink to &quot;启动 docker&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo systemctl start docker</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo systemctl start docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="验证是否安装成功" tabindex="-1">验证是否安装成功 <a class="header-anchor" href="#验证是否安装成功" aria-label="Permalink to &quot;验证是否安装成功&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">sudo docker info</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">sudo docker info</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装docker-compose" tabindex="-1">安装docker-compose <a class="header-anchor" href="#安装docker-compose" aria-label="Permalink to &quot;安装docker-compose&quot;">​</a></h2><h4 id="安装epel源" tabindex="-1">安装epel源 <a class="header-anchor" href="#安装epel源" aria-label="Permalink to &quot;安装epel源&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">yum install -y epel-release</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">yum install -y epel-release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="安装docker-compose-1" tabindex="-1">安装docker-compose <a class="header-anchor" href="#安装docker-compose-1" aria-label="Permalink to &quot;安装docker-compose&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">yum install -y docker-compose</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">yum install -y docker-compose</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,34),c=[o];function r(p,i,d,t,u,m){return s(),a("div",null,c)}const k=e(l,[["render",r]]);export{b as __pageData,k as default};
