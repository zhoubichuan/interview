(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-相关知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-相关知识点"}},[t._v("#")]),t._v(" React 相关知识点")]),t._v(" "),a("h2",{attrs:{id:"_1-react-和-vue-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-react-和-vue-的区别"}},[t._v("#")]),t._v(" 1. react 和 vue 的区别")]),t._v(" "),a("ul",[a("li",[t._v("双向数据绑定")]),t._v(" "),a("li",[t._v("修改数据，react 中 setState")])]),t._v(" "),a("ul",[a("li",[t._v("相同点：\n"),a("ul",[a("li",[t._v("1.数据驱动页面，提供响应式的视图组件")]),t._v(" "),a("li",[t._v("2.都有 virtual DOM 组件化的开发，通过 props 参数进行父子之间的组件传递数据，都实现了 webComponents 规范")]),t._v(" "),a("li",[t._v("3.数据流动单项，都支持服务器的渲染")]),t._v(" "),a("li",[t._v("4.都有支持 native 的方法，react 有 react native，vue 有 wexx")])])]),t._v(" "),a("li",[t._v("不同点：\n"),a("ul",[a("li",[t._v("1.数据绑定：Vue 实现了双向的数据绑定，react 数据流动是单项的")]),t._v(" "),a("li",[t._v("2.数据渲染：大规模的数据渲染，react 更快")]),t._v(" "),a("li",[t._v("3.使用场景：react 配合 redux 架构适合大规模多人协作复杂项目，vue 适合小快的项目")]),t._v(" "),a("li",[t._v("4.开发风格：react 推荐做法 jsx + inline style 把 html 和 css 都写在 js 了；vue 是采用 webpack + vue-loader 单文件组件格式，html,js,css 同一个文件")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-redux-中的-reducer-纯函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-redux-中的-reducer-纯函数"}},[t._v("#")]),t._v(" 2. redux 中的 reducer(纯函数)")]),t._v(" "),a("ul",[a("li",[t._v("redux 数据流里，reduces 其实是根据之前的状态（previous state）和现有的 action（current action）更新 state（这个 state 可以理解为上下累加器的结果）")]),t._v(" "),a("li",[t._v("每次 redux reducer 被执行时，state 和 action 被传入，这个 state 根据 action 进行累加或者是自身消减，进而返回最新的 state，这也就是典型 reduce 函数的用法：state -> action -> state")])]),t._v(" "),a("h2",{attrs:{id:"_3-react-的-refs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-react-的-refs"}},[t._v("#")]),t._v(" 3. react 的 refs")]),t._v(" "),a("ul",[a("li",[t._v("refs 就像一个逃生窗，允许我们之间访问 dom 元素或者组件实例，可以向组件添加一个 ref 属性的值是一个回调函数,它将接受的 dom 元素或组件的已挂载实列，作为第一个参数")])]),t._v(" "),a("h2",{attrs:{id:"_4-react-中的-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-react-中的-keys"}},[t._v("#")]),t._v(" 4. react 中的 keys")]),t._v(" "),a("ul",[a("li",[t._v("帮助我们跟踪那些项目已更改、添加、从列表中删除，key 是独一无二的，可以让我们高效的去定位元素，并且操作它")])]),t._v(" "),a("h2",{attrs:{id:"_5-react-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-react-的生命周期"}},[t._v("#")]),t._v(" 5. React 的生命周期")]),t._v(" "),a("ul",[a("li",[t._v("三个状态：\n"),a("ul",[a("li",[t._v("Mounting(已插入真实的 DOM)")]),t._v(" "),a("li",[t._v("Updating(正在被重新渲染)")]),t._v(" "),a("li",[t._v("Unmounting(已移除真实的 DOM)")])])]),t._v(" "),a("li",[t._v("comonentDidMount 在第一次渲染后调用，只在客户端。之后组件已经生成对应的 DOM 结构")]),t._v(" "),a("li",[t._v("componentDidUpdate 在组件完成更新后立即调用，再初始化是不会调用的")])]),t._v(" "),a("h2",{attrs:{id:"_6-react-子组件向父组件传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-react-子组件向父组件传值"}},[t._v("#")]),t._v(" 6. React 子组件向父组件传值")]),t._v(" "),a("ul",[a("li",[t._v("父组件通过 props 给子组件传递数据，子组件则是通过调用父组件给它的函数给父组件传递数据")])]),t._v(" "),a("h2",{attrs:{id:"_8-为什么虚拟-dom-会提高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么虚拟-dom-会提高性能"}},[t._v("#")]),t._v(" 8. 为什么虚拟 DOM 会提高性能")]),t._v(" "),a("ul",[a("li",[t._v("虚拟 DOM 相当于在 js 和真实 DOM 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能")]),t._v(" "),a("li",[t._v("具体实现步骤：\n"),a("ul",[a("li",[t._v("用 JavaScript 对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档中")]),t._v(" "),a("li",[t._v("当状态变更的时候，重新构建一颗树的对象树，然后用新的和旧的树进行对比，记录两颗树的差异")]),t._v(" "),a("li",[t._v("把所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了")])])])]),t._v(" "),a("h2",{attrs:{id:"_9-diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-diff-算法"}},[t._v("#")]),t._v(" 9. diff 算法")]),t._v(" "),a("ul",[a("li",[t._v("1.把树形结构按照层级分解，只比较同级元素")]),t._v(" "),a("li",[t._v("2.给列表结构的每个单元添加 key 属性，方便比较，在实际代码中，会对新旧两棵树进行一个深度优先遍历，这样每个节点都会有一个标记")]),t._v(" "),a("li",[t._v("3.在深度优先遍历的时候，每遍历到一个节点就把该节点和新的树进行对比，如果有差异的话就记录到一个对象里面。Virtual DOM 算法主要实现上面步骤的三个函数：element,diff,path.然后就可以实际的进行使用。react 只会匹配相同的 class 的 component（这里的 class 指的是组件的名字）。合并操作，调用 component 的 setState 方法的时候，React 将其标记为 dirty 到每一个时间循环，React 检查所有标记 dirty 的 component 重新绘制")]),t._v(" "),a("li",[t._v("4.选择性子树渲染。可以重写 shouldComponentUpdate 提高 diff 性能")])]),t._v(" "),a("h2",{attrs:{id:"_12-react-性能优化是在哪个周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-react-性能优化是在哪个周期"}},[t._v("#")]),t._v(" 12. react 性能优化是在哪个周期")]),t._v(" "),a("ul",[a("li",[t._v("shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom，因为 dom 的描绘非常消耗性能")]),t._v(" "),a("li",[t._v("如果我们在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大提高性能")])]),t._v(" "),a("h2",{attrs:{id:"_13-react-怎么划分业务组件和技术组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-react-怎么划分业务组件和技术组件"}},[t._v("#")]),t._v(" 13.react 怎么划分业务组件和技术组件")]),t._v(" "),a("ul",[a("li",[t._v("根据组件的职责通常把组件分为 UI 组件和容器组件")]),t._v(" "),a("li",[t._v("UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑")]),t._v(" "),a("li",[t._v("两者通过 React-redux 提供 connect 方法联系起来")])]),t._v(" "),a("h2",{attrs:{id:"_14-setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-setstate"}},[t._v("#")]),t._v(" 14. setState")]),t._v(" "),a("ul",[a("li",[t._v("setState 通过一队列机制实现 state 更新，当执行 setState 时，会将需要更新的 state 往后放入状态队列")]),t._v(" "),a("li",[t._v("那么该 state 将不会被放入状态队列中。当下次调用 setState 并对状态队列进行合并时，就会忽略之前修改的 state，造成不可预知的错误")]),t._v(" "),a("li",[t._v("同时，也利用了队列机制实现了 setState 的异步更新，避免了频繁的重复更新 state")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("同步更新 state:")]),t._v(" "),a("ul",[a("li",[t._v("setState 函数并不会阻塞等待状态更新完毕，因此 setNetworkActivityIndicatoryViseible 有可能先于数据渲染完毕就执行。第二个参数是一个回调函数，在 setState 的异步操作结束并且组件已经重新渲染的时候执行，也就是说，我们可以通过这个回调来拿到更新的 state 的值，实现代码的同步")]),t._v(" "),a("li",[t._v("例子")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("componentDidMount(){\n    fetch('http://localhost:3000')\n    .then(res=>res.json())\n    .then(data=>{\n        this.setState({data:data})\n    })\n}\nStatusBar.setNetworkActivityIndicatorVisible(false)\n")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);