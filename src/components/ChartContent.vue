<template>
  <div id="scichart-root" style="width: 600px; height: 400px; margin: auto"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { SciChartSurface } from "scichart/Charting/Visuals/SciChartSurface";
import { NumericAxis } from "scichart/Charting/Visuals/Axis/NumericAxis";

async function initSciChart() {
  SciChartSurface.setRuntimeLicenseKey(
    "HNDWEOmN9tQbh8S+0LFOLurCuxrFppYJ6JthSbQ64H3sokr4ju7XxYe9UynBEJoXsBBVn+eu8lUH1Vnd7+UZvkj0lyMaWSzVRhyIJtP4dlCv4vx+JLYgPS2Tf9lZKUU7HFZNGQtol5BKiqeskH0mMkflDu6oA4vgakaOi/xhPDUJQ2xsaAOrPVCsa0sBfX9PPhNfMt5scYFaUteH5PKgq3kdRqxn4FaaDorEHvYLEWLH6yNBYiAaGfDc5Sda4WbqfUg3KonMs3ksdFQ2xXoeXF0eSWLZZhgPwdGXJDYs3PlehnVHnMrBhqvt5twW/aOoz3yrvWMkol5M1T0mGwC+4TgH9HfJpOWTcrb/HiLueJzm8IKuramZ0ZUppy7mA+jGQj7NSL08yS/u87WAauqLJ6i4RqMP+BoGAwT9h2yKA/PV15VGdZJUvgvNqcKf1qusLJm1R0QQcuax6FN72R6EF9yalo+82K8o6uc++JGqBLfPFsF6XZQzhnYI4he/2gDUz5vO78jGo/kjeZAfwkFxjiI3VcUJ+AGEQl7CEb4ggt1/fmYUSbMo+9IoKY2OZMGhtNQy7awUTIjglHDRu+jt4SBDTvwJY2p3PGvlmKgobxRNvMO/14c="
  );
  // LICENSING //
  // Set your license code here
  // You can get a trial license key from https://www.scichart.com/licensing-scichart-js/
  // Purchased license keys can be viewed at https://www.scichart.com/profile
  //
  // e.g.
  //
  // SciChartSurface.setRuntimeLicenseKey("YOUR_RUNTIME_KEY");
  //
  // Also, once activated (trial or paid license) having the licensing wizard open on your machine
  // will mean any or all applications you run locally will be fully licensed.

  // Create the SciChartSurface in the div 'scichart-root'
  // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
  // instance must be passed to other types that exist on the same surface.

  // Create the SciChartSurface in the div 'scichart-root'
  // The SciChartSurface, and webassembly context 'wasmContext' are paired. This wasmContext
  // instance must be passed to other types that exist on the same surface.
  const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root");

  // Create an X,Y Axis and add to the chart
  const xAxis = new NumericAxis(wasmContext);
  const yAxis = new NumericAxis(wasmContext);

  sciChartSurface.xAxes.add(xAxis);
  sciChartSurface.yAxes.add(yAxis);

  // That's it! You just created your first SciChartSurface!
}

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log("execute onMounted");
      initSciChart();
    });
  },
  // name: "ChartContent",
  // props: {
  //   msg: String,
  // },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
