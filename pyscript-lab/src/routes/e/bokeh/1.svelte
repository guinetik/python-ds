<script>
  import ExperimentCard from "../../../components/experiment_card.svelte";
  import { getLink } from "../../../util/utils";
  import RunPython from "../../../util/RunPython";
  import { onMount, onDestroy } from "svelte";
  //
  const props = {
    nextPage: "e/bokeh/2",
    previousPage: "e/bokeh",
  };
  //
  let pyScriptRunner;
  onMount(() => {
    if (!pyScriptRunner) {
      pyScriptRunner = RunPython();
      pyScriptRunner.runScript(
        getLink("py/bokeh_pandas.py"),
        "script_gutter",
        false
      );
    }
  });
  onDestroy(() => {
    if (pyScriptRunner) {
      pyScriptRunner.destroy();
    }
  });
</script>

<ExperimentCard {props}>
  <div slot="py_slot">
    <div id="chart" class="w-full h-auto" />
    <div id="chart2" class="w-full" />
    <div id="chart3" class="w-full h-full" />
    <div id="chart4" class="w-full h-min" />
    <div id="chart5" class="w-full h-max" />
  </div>
  <article slot="content_slot" class="mb-10">
    <h2 class="text-xl font-extrabold mb-5">Bokeh + Pandas</h2>
    <p>Plotting Bokeh Graph from a Pandas Dataframe</p>
    <p class="mt-6">
      <a
        class="text-sky-500"
        href={getLink("py/bokeh_index.py")}
        target="_blank">View source</a
      >
    </p>
  </article>
</ExperimentCard>
<svelte:head>
  <script type="text/javascript">
    Bokeh.set_log_level("info");
  </script>
<py-env>
- bokeh
- pandas
- numpy
</py-env>
</svelte:head>
