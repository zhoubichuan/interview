(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(t,a,_){"use strict";_.r(a);var s=_(0),v=Object(s.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"十、前端安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十、前端安全"}},[t._v("#")]),t._v(" 十、前端安全")]),t._v(" "),_("h2",{attrs:{id:"_1-什么是-csrf-攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-csrf-攻击"}},[t._v("#")]),t._v(" 1.什么是 CSRF 攻击")]),t._v(" "),_("h2",{attrs:{id:"_2-如何防御-csrf-攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何防御-csrf-攻击"}},[t._v("#")]),t._v(" 2.如何防御 CSRF 攻击")]),t._v(" "),_("ul",[_("li",[t._v("Token")]),t._v(" "),_("li",[t._v("Referer")]),t._v(" "),_("li",[t._v("SameSite")])]),t._v(" "),_("h2",{attrs:{id:"_3-什么是-xss-攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是-xss-攻击"}},[t._v("#")]),t._v(" 3.什么是 XSS 攻击")]),t._v(" "),_("h2",{attrs:{id:"_4-xss-攻击有哪些类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-xss-攻击有哪些类型"}},[t._v("#")]),t._v(" 4.XSS 攻击有哪些类型")]),t._v(" "),_("ul",[_("li",[t._v("存储型")]),t._v(" "),_("li",[t._v("反射型")]),t._v(" "),_("li",[t._v("DOM 型")])]),t._v(" "),_("h2",{attrs:{id:"_5-如何防御-xss-攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何防御-xss-攻击"}},[t._v("#")]),t._v(" 5.如何防御 XSS 攻击")]),t._v(" "),_("ul",[_("li",[t._v("输入检查")]),t._v(" "),_("li",[t._v("设置 httpOnly")]),t._v(" "),_("li",[t._v("开启 CSP")])]),t._v(" "),_("h2",{attrs:{id:"_6-跨域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-跨域"}},[t._v("#")]),t._v(" 6. 跨域")]),t._v(" "),_("h3",{attrs:{id:"什么是跨域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[t._v("#")]),t._v(" 什么是跨域")]),t._v(" "),_("ul",[_("li",[t._v("同源策略：协议，端口，域名要相同")]),t._v(" "),_("li",[t._v("由于浏览器同源策略，凡是发送请求 url 的协议、域名、端口三者之间任意一种与当前页面地址不同即为跨域。")])]),t._v(" "),_("p",[t._v("协议不同：\nhttp 与 https")]),t._v(" "),_("p",[t._v("端口不同：\nlocalhost:8080 与 localhost:3000")]),t._v(" "),_("p",[t._v("域名不同：\nhuawei.com 与 consumenr.huawei.com")]),t._v(" "),_("h3",{attrs:{id:"跨域的十种方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨域的十种方式"}},[t._v("#")]),t._v(" 跨域的十种方式")]),t._v(" "),_("ul",[_("li",[t._v("1.降级浏览器")]),t._v(" "),_("li",[t._v("2.jsonp")]),t._v(" "),_("li",[t._v("3.cors")]),t._v(" "),_("li",[t._v("4.node 中间件：proxy-middlewire")]),t._v(" "),_("li",[t._v("5.nginx：配置代理服务将后端请转发给前端")]),t._v(" "),_("li",[t._v("6.websockit:是 HTML5 一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是 server push 技术的一种很好的实现。")]),t._v(" "),_("li",[t._v("7.postmessage:h5 跨域方法 frame.contentWindow.postMessage,e.data;e.data,e.source.postMesage")]),t._v(" "),_("li",[t._v("8.localhost.hash:c 页面动态创建 b 页面，请求里面有参数，b 页面 window.parent.parent.location.hash=location.hash,a 通过 location.hash 拿到参数")]),t._v(" "),_("li",[t._v("9.document.name：proxy 一个空的代理页面，被访问的页面动态切换 iframe 页面域名，name 没有消失，frame.contentWindow.name,window.name")]),t._v(" "),_("li",[t._v("10.document.domain:主域名相同，docuemnt.domain 强制设置主域，freame.contentWindow,window.parent")])]),t._v(" "),_("h2",{attrs:{id:"_18-图片的懒加载和预加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_18-图片的懒加载和预加载"}},[t._v("#")]),t._v(" 18. 图片的懒加载和预加载")]),t._v(" "),_("h3",{attrs:{id:"预加载："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#预加载："}},[t._v("#")]),t._v(" 预加载：")]),t._v(" "),_("p",[t._v("提前加载图片，当用户需要查看时可以直接从本地缓存中渲染")]),t._v(" "),_("p",[t._v("为什么要使用预加载：在网页加载之前，对一些主要内容进行加载，减少等待时间，给用户提供更好的体验；否则，如歌一个页面的内容过于庞大，会出现留白。")]),t._v(" "),_("ul",[_("li",[t._v("解决留白的方法：\n"),_("ul",[_("li",[_("ol",[_("li",[t._v("预加载")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("使用 svg 占位图片，将一些结构快速搭建起来，等请求的数据来了之后，替换当前的占位符")])])])])]),t._v(" "),_("li",[t._v("实现预加载的方法：\n"),_("ul",[_("li",[_("ol",[_("li",[t._v("使用 html 标签")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("使用 Image 标签")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("使用 XMLHTTPRequest 对象，但会精细控制预加载过程；")])])])])])]),t._v(" "),_("h3",{attrs:{id:"懒加载："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#懒加载："}},[t._v("#")]),t._v(" 懒加载：")]),t._v(" "),_("p",[t._v("客户端优化，减少 http 请求和延迟请求数量")]),t._v(" "),_("ul",[_("li",[t._v("提升用户体验")]),t._v(" "),_("li",[t._v("减少无效资源的加载")]),t._v(" "),_("li",[t._v("防止并发加载资源过多会阻塞 js 的加载，影响网站的正常使用")]),t._v(" "),_("li",[t._v("原理：首先将页面上的图片的 src 属性设置为空字符串，而图片的真路径则设置带 data-original 属性中；当页面滚动的时候去监听 scroll 事件，在 scroll 事件的回调中，判断我们的懒加载的图片是否进入可视区域；如果图片在可视区域将图片的 src 属性设置为 data-original 的值，这样就可以实现延迟加载。")])])])}],!1,null,null,null);a.default=v.exports}}]);