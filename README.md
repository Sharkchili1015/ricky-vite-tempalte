# Ricky's template of Vite

## 项目中vite.config中的plugins统一使用_vitePlugins文件维护

目前使用的plugins

- auto-imports
- auto-components
- mock
- wind

## 项目基于vite的glob做了路由自动引入

```
pages/
├── index.vue
├── meta.ts //meta.ts代表router的meta
```

// 如果有二级目录请保持与一级目录的结构一致

## 项目中在main.ts注册的插件或事物请提供一个setup方法进行注册，方便后期维护

请仿照在`router/index.ts`中的`setupRouter`方法

## 项目中使用typescript构建

请将所有的类型按模块在`model`中创建
