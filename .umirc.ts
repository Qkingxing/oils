import {
  defineConfig
} from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    // dark: true,
    // compact: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  lessLoader: {
    javascriptEnabled: true,
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', redirect: '/shuju' },
        // { path: '/shuju', redirect: '/shuju/gailan'},
        { path: '/shuju', redirect: "/shuju/gailan/zhengtikanban" },
        { path: '/shuju/gailan/zhengtikanban', component: "./shuju/gailan" },

        // 系统设置
        { path: '/system', redirect: '/system/menu' },
        { path: '/system/menu', component: './system/menu' },
        { path: '/system/role', component: './system/role' },
      ],
    },
  ],
});
