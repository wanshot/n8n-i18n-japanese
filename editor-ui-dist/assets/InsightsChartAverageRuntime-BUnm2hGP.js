import { d as defineComponent, x as computed, iS as INSIGHTS_UNIT_MAPPING, iP as GRANULARITY_DATE_FORMAT_MASK, iV as transformInsightsAverageRunTime, c as useI18n, e as createBlock, g as openBlock, l as unref, iT as index } from "./index-CIRK3b1t.js";
import { a as generateLineChartOptions, b as generateLinearGradient } from "./chartjs.utils-DMfnprm_.js";
import { s as smartDecimal } from "./InsightsSummary-YimPEdq0.js";
import { L as Line } from "./index-C7yPnaMM.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsChartAverageRuntime",
  props: {
    data: {},
    type: {},
    granularity: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const chartOptions = computed(
      () => generateLineChartOptions({
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label ?? "";
                return `${label} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
              }
            }
          }
        }
      })
    );
    const chartData = computed(() => {
      const labels = [];
      const data = [];
      for (const entry of props.data) {
        labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
        const value = transformInsightsAverageRunTime(entry.values.averageRunTime);
        data.push(value);
      }
      return {
        labels,
        datasets: [
          {
            label: i18n.baseText("insights.banner.title.averageRunTime"),
            data,
            cubicInterpolationMode: "monotone",
            fill: "origin",
            backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
            borderColor: "rgba(255, 64, 39, 1)"
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Line), {
        "data-test-id": "insights-chart-average-runtime",
        data: chartData.value,
        options: chartOptions.value,
        plugins: [unref(index)]
      }, null, 8, ["data", "options", "plugins"]);
    };
  }
});
export {
  _sfc_main as default
};
