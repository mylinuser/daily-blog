import{_ as t,o as a,c as l,k as e,a as n}from"./chunks/framework.82e0a936.js";const U=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/tcp-udp.md","filePath":"interview/tcp-udp.md","lastUpdated":1694189773000}'),c={name:"interview/tcp-udp.md"},i=e("h2",{id:"tcp和udp的区别",tabindex:"-1"},[n("Tcp和Udp的区别 "),e("a",{class:"header-anchor",href:"#tcp和udp的区别","aria-label":'Permalink to "Tcp和Udp的区别"'},"​")],-1),d=e("ol",null,[e("li",null,"TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接"),e("li",null,"TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保 证可靠交付"),e("li",null,"TCP面向字节流，实际上是TCP把数据看成一连串无结构的字节流;UDP是面向报文的 UDP没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如IP电话，实时视频会议等）"),e("li",null,"每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信"),e("li",null,"TCP首部开销20字节;UDP的首部开销小，只有8个字节"),e("li",null,"TCP的逻辑通信信道是全双工的可靠信道，UDP则是不可靠信道")],-1),o=[i,d];function p(r,s,P,u,_,h){return a(),l("div",null,o)}const m=t(c,[["render",p]]);export{U as __pageData,m as default};
