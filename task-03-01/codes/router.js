
let _Vue = null;

export default class VueRouter {

  static install(vue) {
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true

    _Vue = vue;

    _Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      }
    })

  }

  constructor(options) {
    this.options = options;
    this.routerMap = {};

    // 创建响应式对象
    this.data = _Vue.observable({
      current: '/'
    })
  }


  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  createRouteMap() {
    console.log(this.options.routes, 'this.options')
    this.options.routes.forEach(route => {
      this.routerMap[route.path] = route.component
    })

    console.log(this.routerMap, 'this.routerMap')
  }

  initComponents(Vue) {

    let self = this;
    Vue.component('router-link', {
      props: {
        to: String,
      },
      render(h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.clickHandler
          }
        }, [this.$slots.default])
      },
      methods: {
        clickHandler(e) {
          pushHash(this.to);
          console.log(this.to, 'this.to')
          this.$router.data.current = this.to;
          e.preventDefault();
        }
      }
    });

    Vue.component('router-view', {
      render(h) {
        console.log(self.routerMap[self.data.current], self.data.current, 'self.routerMap[self.data.current]')
        const component = self.routerMap[self.data.current];
        // h可以将dom元素转换为虚拟dom
        return h(component)
      }
    })
  }

  initEvent() {
    window.addEventListener('hashchange', () => {
      this.data.current = getHash();
      console.log(getHash(), 'this.data.current')
    })
  }
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  // 因为兼容性的问题，这里没有直接使用 window.location.hash
  // 因为 Firefox decode hash 值
  const href = window.location.href
  const index = href.indexOf('#')
  return index === -1 ? '/' : '/' + decodeURI(href.slice(index + 1))
}

// 得到hash之前的url地址
// function getUrl(path) {
//   const href = window.location.href
//   const i = href.indexOf('#')
//   const base = i >= 0 ? href.slice(0, i) : href
//   return `${base}#${path}`
// }

// 添加一个hash
function pushHash(path) {
  window.location.hash = path
}
