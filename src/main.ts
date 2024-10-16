/*
 * @Author: June
 * @Description:
 * @Date: 2024-09-27 11:31:54
 * @LastEditors: June
 * @LastEditTime: 2024-10-13 02:00:35
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ViewUiPlus from 'view-ui-plus';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import './styles/index.less';
import VueLazyLoad from 'vue3-lazyload';
// 自定义字体文件
import '@/assets/fonts/font.css';

import i18n from './language/index';
import 'wc-waterfall';

async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  app.use(i18n);
  app.use(VueLazyLoad, {});
  app.use(ViewUiPlus);
  await router.isReady();
  app.mount('#app');
}
bootstrap();
