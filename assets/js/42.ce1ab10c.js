(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{210:function(t,a,s){"use strict";s.r(a);var r=s(0),n=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"十八、有赞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十八、有赞"}},[t._v("#")]),t._v(" 十八、有赞")]),t._v(" "),s("h2",{attrs:{id:"_1-linux-754-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-754-介绍"}},[t._v("#")]),t._v(" 1.Linux 754 介绍")]),t._v(" "),s("h2",{attrs:{id:"_2-介绍冒泡排序，选择排序，冒泡排序如何优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-介绍冒泡排序，选择排序，冒泡排序如何优化"}},[t._v("#")]),t._v(" 2.介绍冒泡排序，选择排序，冒泡排序如何优化")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bubbleSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" preVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nextVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nextVal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextVal\n        params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" preVal\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" params\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" minIndex\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    minIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        minIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" minVal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("minIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" minVal\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" params\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-transform-动画和直接使用-left、top-改变位置有什么优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-transform-动画和直接使用-left、top-改变位置有什么优缺点"}},[t._v("#")]),t._v(" 3.transform 动画和直接使用 left、top 改变位置有什么优缺点")]),t._v(" "),s("h2",{attrs:{id:"_4-如何判断链表是否有环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何判断链表是否有环"}},[t._v("#")]),t._v(" 4.如何判断链表是否有环")]),t._v(" "),s("h2",{attrs:{id:"_5-介绍二叉搜索树的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-介绍二叉搜索树的特点"}},[t._v("#")]),t._v(" 5.介绍二叉搜索树的特点")]),t._v(" "),s("h2",{attrs:{id:"_6-介绍暂时性死区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-介绍暂时性死区"}},[t._v("#")]),t._v(" 6.介绍暂时性死区")]),t._v(" "),s("h2",{attrs:{id:"_7-es6-中的-map-和原生的对象有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-es6-中的-map-和原生的对象有什么区别"}},[t._v("#")]),t._v(" 7.ES6 中的 map 和原生的对象有什么区别")]),t._v(" "),s("h2",{attrs:{id:"_8-观察者和发布-订阅的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-观察者和发布-订阅的区别"}},[t._v("#")]),t._v(" 8.观察者和发布-订阅的区别")]),t._v(" "),s("h2",{attrs:{id:"_9-react-异步渲染的概念-介绍-time-slicing-和-suspense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-react-异步渲染的概念-介绍-time-slicing-和-suspense"}},[t._v("#")]),t._v(" 9.react 异步渲染的概念,介绍 Time Slicing 和 Suspense")]),t._v(" "),s("h2",{attrs:{id:"_10-16-x-声明周期的改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-16-x-声明周期的改变"}},[t._v("#")]),t._v(" 10.16.X 声明周期的改变")]),t._v(" "),s("h2",{attrs:{id:"_11-16-x-中-props-改变后在哪个生命周期中处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-16-x-中-props-改变后在哪个生命周期中处理"}},[t._v("#")]),t._v(" 11.16.X 中 props 改变后在哪个生命周期中处理")]),t._v(" "),s("h2",{attrs:{id:"_12-介绍纯函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-介绍纯函数"}},[t._v("#")]),t._v(" 12.介绍纯函数")]),t._v(" "),s("h2",{attrs:{id:"_13-前端性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-前端性能优化"}},[t._v("#")]),t._v(" 13.前端性能优化")]),t._v(" "),s("h2",{attrs:{id:"_14-purecomponent-和-functioncomponent-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-purecomponent-和-functioncomponent-区别"}},[t._v("#")]),t._v(" 14.pureComponent 和 FunctionComponent 区别")]),t._v(" "),s("h2",{attrs:{id:"_15-介绍-jsx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-介绍-jsx"}},[t._v("#")]),t._v(" 15.介绍 JSX")]),t._v(" "),s("h2",{attrs:{id:"_16-如何做-rn-在安卓和-ios-端的适配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-如何做-rn-在安卓和-ios-端的适配"}},[t._v("#")]),t._v(" 16.如何做 RN 在安卓和 IOS 端的适配")]),t._v(" "),s("h2",{attrs:{id:"_17-rn-为什么能在原生中绘制成原生组件（bundle-js）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-rn-为什么能在原生中绘制成原生组件（bundle-js）"}},[t._v("#")]),t._v(" 17.RN 为什么能在原生中绘制成原生组件（bundle.js）")]),t._v(" "),s("h2",{attrs:{id:"_18-介绍虚拟-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-介绍虚拟-dom"}},[t._v("#")]),t._v(" 18.介绍虚拟 DOM")]),t._v(" "),s("h2",{attrs:{id:"_19-如何设计一个-localstorage，保证数据的实效性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-如何设计一个-localstorage，保证数据的实效性"}},[t._v("#")]),t._v(" 19.如何设计一个 localStorage，保证数据的实效性")]),t._v(" "),s("h2",{attrs:{id:"_20-如何设计-promise-all"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-如何设计-promise-all"}},[t._v("#")]),t._v(" 20.如何设计 Promise.all()")]),t._v(" "),s("h2",{attrs:{id:"_21-介绍高阶组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-介绍高阶组件"}},[t._v("#")]),t._v(" 21.介绍高阶组件")]),t._v(" "),s("h2",{attrs:{id:"_22-sum-2-3-实现-sum-2-3-的效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-sum-2-3-实现-sum-2-3-的效果"}},[t._v("#")]),t._v(" 22.sum(2, 3)实现 sum(2)(3)的效果")]),t._v(" "),s("p",[t._v("柯里化函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_23-react-性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_23-react-性能优化"}},[t._v("#")]),t._v(" 23.react 性能优化")]),t._v(" "),s("h2",{attrs:{id:"_24-两个对象如何比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_24-两个对象如何比较"}},[t._v("#")]),t._v(" 24.两个对象如何比较")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Object.prototype.toString.call()\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);