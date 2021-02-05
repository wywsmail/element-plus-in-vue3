import "element-plus/lib/theme-chalk/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {
  ElButton,
  ElCol,
  ElInput,
  ElPagination,
  ElRow,
  ElTable,
  ElTableColumn
} from "element-plus";

const app = createApp(App);

app.config.globalProperties.$ELEMENT = { size: "small", zIndex: 3000 };
// 我其實不確定這一行是不是這樣寫，因為官網是寫下面這樣
// app.config.globalProperties.$ELEMENT = option
// 但是 option 會報錯


app.component(ElButton.name, ElButton);
app.component(ElCol.name, ElCol);
app.component(ElInput.name, ElInput);
app.component(ElPagination.name, ElPagination);
app.component(ElRow.name, ElRow);
app.component(ElTable.name, ElTable);
app.component(ElTableColumn.name, ElTableColumn);
app.use(router).mount("#app");
