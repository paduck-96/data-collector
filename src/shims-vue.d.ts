declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, T>;
  export default component;
}
