(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{198:function(e,t,v){"use strict";v.r(t);var _=v(0),a=Object(_.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"一、vue-相关知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、vue-相关知识点"}},[e._v("#")]),e._v(" 一、Vue 相关知识点")]),e._v(" "),v("h2",{attrs:{id:"_1-介绍下-mvvm（数据的双向绑定）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍下-mvvm（数据的双向绑定）"}},[e._v("#")]),e._v(" 1.介绍下 MVVM（数据的双向绑定）")]),e._v(" "),v("ul",[v("li",[e._v("M:model 数据模型")]),e._v(" "),v("li",[e._v("V:view 界面")]),e._v(" "),v("li",[e._v("MV:作为桥梁负责沟通，view 和 model")]),e._v(" "),v("li",[e._v("只关心数据的流传，减少强耦合性，最关键的就是数据的双向绑定")]),e._v(" "),v("li",[e._v("关键步骤：")]),e._v(" "),v("li",[e._v("1.实现数据监听器 Observer,用 object.defineProperty()重写数组的 get/set。数据更新就在 set 中通知订阅者更新数据。")]),e._v(" "),v("li",[e._v("2.实现模板编译 compiler，深度遍历 dom 树，对每个元素节点的指令模板替换数据及订阅数据。")]),e._v(" "),v("li",[e._v("3.实现 watch 用于连接 Observer 和 Compiler，能够订阅并接受每一个属性的变动的通知，执行指令绑定对的响应的回调函数，从而更新数据。\n-MVC 和 MVVM 其实区别并不大。都是一种设计思想，主要是 MVC 中 Controller 演变成 MVVM 中的 ViewMode，mvvm 主要解决了 MVC 中大量的 Dom 操作使页面渲染性能降低。")])]),e._v(" "),v("h2",{attrs:{id:"_2-vue-实现数据双向绑定的原理："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-实现数据双向绑定的原理："}},[e._v("#")]),e._v(" 2.Vue 实现数据双向绑定的原理：")]),e._v(" "),v("ul",[v("li",[e._v("采用数据劫持结合发布订阅，通过 Object.defineProperty()来劫持各个属性的 setter,getter，在数据变动时发布消息给订阅者，触发相应的监听回调。当把一个普通 JavaScript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty()将他们转换为 getter/sertter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。")]),e._v(" "),v("li",[e._v("Vue 的数据双向绑定，将 MVVM 作为数据绑定的入口，整合 Observer，Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 的数据变化，通过 Compiler 之间的通信桥梁，达到数据变化--\x3e视图更新；视图交互变化（input）--\x3e数据 model 变更双向绑定的效果。")])]),e._v(" "),v("h2",{attrs:{id:"_3-watch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-watch"}},[e._v("#")]),e._v(" 3. watch")]),e._v(" "),v("ul",[v("li",[e._v("对属性进行监听，允许我们执行异步操作，限制执行该操作的频率，并在我们得到结构前设置中间状态")])]),e._v(" "),v("h2",{attrs:{id:"_4-生命周期函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-生命周期函数"}},[e._v("#")]),e._v(" 4. 生命周期函数")]),e._v(" "),v("p",[e._v("vue 初始化到渲染的过程")]),e._v(" "),v("ul",[v("li",[e._v("1.new Vue")]),e._v(" "),v("li",[e._v("2.init --\x3e initEvent --\x3e beforeCreate --\x3e initData（observer...） --\x3ecreated")]),e._v(" "),v("li",[e._v("3.$mount--\x3e beforeMount")]),e._v(" "),v("li",[e._v("4.render")]),e._v(" "),v("li",[e._v("5.compiler")]),e._v(" "),v("li",[e._v("6.vnode")]),e._v(" "),v("li",[e._v("7.path")]),e._v(" "),v("li",[e._v("9.dom --\x3e mounted")])]),e._v(" "),v("p",[e._v("组件更新")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("initData(dep)")])]),e._v(" "),v("li",[v("p",[e._v("watch(dep)")])]),e._v(" "),v("li",[v("p",[e._v("render(dep)")])]),e._v(" "),v("li",[v("p",[e._v("beforeUpdate --\x3e virtual dom --\x3e updated")])])]),e._v(" "),v("h2",{attrs:{id:"_5-keep-alive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-keep-alive"}},[e._v("#")]),e._v(" 5. keep-alive")]),e._v(" "),v("ul",[v("li",[e._v("在被 keep-alive 包含的组件/路由，会多出两个生命周期：activated 和 deactiated")]),e._v(" "),v("li",[e._v("actived 在组件第一次渲染时会被调用，之后每次缓存组件被激活时调用，调用机制：第一次进入缓存路由/组件，在 mounted 后面，beforRouteEnter 守卫传给 next 的回调函数之前调用")])]),e._v(" "),v("h2",{attrs:{id:"_6-vue-的-spa-如何优化加载速度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue-的-spa-如何优化加载速度"}},[e._v("#")]),e._v(" 6. vue 的 spa 如何优化加载速度")]),e._v(" "),v("ul",[v("li",[e._v("减少入口文件的体积、静态资源本地缓存、开启 gzip 压缩、使用 ssr,nuxt.js")])]),e._v(" "),v("h2",{attrs:{id:"_7-谈谈-vue-和-react-组件化的思想"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-谈谈-vue-和-react-组件化的思想"}},[e._v("#")]),e._v(" 7. 谈谈 vue 和 react 组件化的思想")]),e._v(" "),v("ul",[v("li",[e._v("我们在各个页面开发的时候，会产生很多重复的功能")]),e._v(" "),v("li",[e._v("1.我们在各个页面开发的时候，会产生很多重复的功能，比如，element 中的 xxx，像这种纯粹非页面的 UI，便成为我们常用 UI 组件，最初的前端组件也就仅仅值得是 UI 组件")]),e._v(" "),v("li",[e._v("2.随着业务逻辑变得越来越多时，我们就想要我们的组件可以处理很多事，这就是我们常说的组件化，这个组件就不是 UI 组件了，而是包含具体业务的业务组件")]),e._v(" "),v("li",[e._v("3.这种开发思想就是分而治之。最大程度降低开发难度和维护成本的效果，并且可以多人协作，每人写不同的组件，最后像搭积木一样把它构成一个页面")])]),e._v(" "),v("h2",{attrs:{id:"_8-框架区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-框架区别"}},[e._v("#")]),e._v(" 8.框架区别")]),e._v(" "),v("ul",[v("li",[e._v("1、vue 与 AngularJS 的区别")])]),e._v(" "),v("p",[e._v("相同点：都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览器。")]),e._v(" "),v("p",[e._v("不同点：AngularJS 的学习成本高，比如增加了 Dependency Injection 特性，而 Vue.js 本身提供的 API 都比较简单、直观；在性能上，AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢；Vue.js 使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。")]),e._v(" "),v("ul",[v("li",[e._v("2、vue 与 React 的区别")])]),e._v(" "),v("p",[e._v("相同点：React 采用特殊的 JSX 语法，Vue.js 在组件开发中也推崇编写.vue 特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用；中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数，可以让开发者定制化地去处理需求；都不内置列数 AJAX，Route 等功能到核心包，而是以插件的方式加载；在组件开发中都支持 mixins 的特性。")]),e._v(" "),v("p",[e._v("不同点：React 采用的 Virtual DOM 会对渲染出来的结果做脏检查；Vue.js 在模板中提供了指令，过滤器等，可以非常方便，快捷地操作 Virtual DOM。")]),e._v(" "),v("h2",{attrs:{id:"_9-vue-路由的钩子函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-vue-路由的钩子函数"}},[e._v("#")]),e._v(" 9.vue 路由的钩子函数")]),e._v(" "),v("ul",[v("li",[e._v("全局导航钩子\n"),v("ul",[v("li",[e._v("router.beforeEach(to,from,next)")]),e._v(" "),v("li",[e._v("router.beforeResolve(to,from,next)")]),e._v(" "),v("li",[e._v("router.afterEach(to,from,next)")])])]),e._v(" "),v("li",[e._v("组件内钩子\n"),v("ul",[v("li",[e._v("beforeRouteEnter")]),e._v(" "),v("li",[e._v("beforeRouteUpdate")]),e._v(" "),v("li",[e._v("beforeRouteLeave")])])]),e._v(" "),v("li",[e._v("单独路由独享钩子\n"),v("ul",[v("li",[e._v("beforeEnter")])])])]),e._v(" "),v("h2",{attrs:{id:"_10-vuex-是什么？怎么使用？哪种功能场景使用它？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-vuex-是什么？怎么使用？哪种功能场景使用它？"}},[e._v("#")]),e._v(" 10.vuex 是什么？怎么使用？哪种功能场景使用它？")]),e._v(" "),v("p",[e._v("只用来读取的状态集中放在 store 中； 改变状态的方式是提交 mutations，这是个同步的事物； 异步逻辑应该封装在 action 中。")]),e._v(" "),v("p",[e._v("在 main.js 引入 store，注入。新建了一个目录 store，… export 。")]),e._v(" "),v("p",[e._v("场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车")]),e._v(" "),v("p",[e._v("state：Vuex 使用单一状态树,即每个应用将仅仅包含一个 store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。")]),e._v(" "),v("p",[e._v("mutations：mutations 定义的方法动态修改 Vuex 的 store 中的状态或数据。")]),e._v(" "),v("p",[e._v("getters：类似 vue 的计算属性，主要用来过滤一些数据。")]),e._v(" "),v("p",[e._v("action：actions 可以理解为通过将 mutations 里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。")]),e._v(" "),v("h2",{attrs:{id:"_11-vue-组件间的参数传递"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-vue-组件间的参数传递"}},[e._v("#")]),e._v(" 11.Vue 组件间的参数传递")]),e._v(" "),v("ul",[v("li",[e._v("1.props:父组件创建属性给子组件，属性可以进行验证、赋给默认值等")]),e._v(" "),v("li",[e._v("2.refs:访问子组件的属性或者方法")]),e._v(" "),v("li",[e._v("3.$parent:访问父组件的属性或方法；$children:访问子组件的属性或方法")]),e._v(" "),v("li",[e._v("4.$emit:父组件订阅子组件事件，$on:父组件发布子组件事件")]),e._v(" "),v("li",[e._v("5.vuex：全局共享状态和方法（同步异步）")]),e._v(" "),v("li",[e._v("6.provide/inject:父组件提供属性，供子组件访问")]),e._v(" "),v("li",[e._v("7.Bus：类似$emit/$on，全局版的发布订阅模式")])]),e._v(" "),v("h2",{attrs:{id:"_12-vue-的路由实现：hash-模式-和-history-模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-vue-的路由实现：hash-模式-和-history-模式"}},[e._v("#")]),e._v(" 12.Vue 的路由实现：hash 模式 和 history 模式")]),e._v(" "),v("ul",[v("li",[e._v("hash 模式：\n在浏览器中符号“#”，#以及#后面的字符称之为 hash，用 window.location.hash 读取。\n特点：hash 虽然在 URL 中，但不被包括在 HTTP 请求中；用来指导浏览器动作，对服务端安全无用，hash 不会重加载页面。")]),e._v(" "),v("li",[e._v("history 模式：\nhistory 采用 HTML5 的新特性；且提供了两个新方法： pushState()， replaceState()可以对浏览器历史记录栈进行修改，以及 popState 事件的监听到状态变更。")])])])}],!1,null,null,null);t.default=a.exports}}]);