1. 通过该项目 ，简要说明ts 比js的优势在哪
  
  typescrip比起javascript会更严谨， 在项目复杂的情况下，通过接口、类等约束， 在后续编写代码中会更容易知其内部的结构，并且在编译前就能提示错误，减少错误率。
  ts同时也支持es6或者其以上版本的js的代码。

2. 请简述一下支付流程

  用户在点击支付按钮时， 浏览器会发起支付的post请求，参数为支付机构端所必需的参数和服务端所需参数， 在请求成功的情况下会返回支付页面，此时浏览器打开新窗口内容为支付页面， 支付成功后， 支付机构会向服务器发送post请求，建立一个支付订单， 并且页面会返回到开发好的paysunccess页面。

3. react-redux 的主要作用是什么， 常用的api有哪些， 什么作用

  react-redux是一个js状态容器， 提供可预测化的状态管理， 常用的api有 
    
    * action： 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源
    * reducer： 指定了应用状态的变化如何响应action，并发送到 store 的
    * store： 维持应用的 state， 提供 getState() 方法获取 state，提供 dispatch(action) 方法更新 state，通过 subscribe(listener) 注册监听器;通过 subscribe(listener) 返回的函数注销监听器

4. redux中如何处理异步

    rudux本身没有提供处理异步的能力，使用middleware来增强createStore，可以帮助我们用简便的方式来描述异步的 action，applyMiddleware返回dispatch覆盖原始store的dispatch，当action为函数时，进行定制的异步场景dispatch派发。