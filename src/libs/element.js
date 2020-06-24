import Vue from 'vue'
import {
  Select, Input, Option, Dialog, Loading, MessageBox, Button, Table, TableColumn, Row, Col
} from 'element-ui';

Vue.component(Select.name, Select);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Option.name, Option);
Vue.component(Dialog.name, Dialog);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msg = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;