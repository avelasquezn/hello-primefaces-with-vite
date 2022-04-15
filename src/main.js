import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import SplitButton from "primevue/splitbutton";

import "primevue/resources/themes/md-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

createApp(App)
  .use(PrimeVue, { ripple: true })
  .component("SplitButton", SplitButton)
  .component("Calendar", Calendar)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("Splitter", Splitter)
  .component("SplitterPanel", SplitterPanel)
  .mount("#app");
