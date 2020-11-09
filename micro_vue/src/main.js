import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let app = null;
// 有些时候我们希望直接启动微应用从而更方便的开发调试，你可以使用这个全局变量来区分当前是否运行在 qiankun 的主应用的上下文中：
if (!window.__POWERED_BY_QIANKUN__) {
  render();
} else {
  // 解决微应用加载的资源会 404
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
function render() {
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}


export async function bootstrap(props) {
  console.log('react app bootstraped', props);
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('mount', props);
  render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log('unmount', props)
  app.$destroy();
  app = null;
}