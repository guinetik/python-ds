<script>
  import ExperimentCard from "../../../components/experiment_card.svelte";
  import { getLink } from "../../../util/utils";
  import RunPython from "../../../util/RunPython";
  import { onMount, onDestroy } from "svelte";
  //
  const props = {
    nextPage: "e/repl",
    previousPage: "e/bokeh/1",
  };
  //
  let pyScriptRunner;
  onMount(() => {
    if (!pyScriptRunner) {
      pyScriptRunner = RunPython();
      pyScriptRunner.runScript(
        getLink("py/bokeh_networks.py"),
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
    <div id="chart2" class="w-full h-auto" />
    <div id="chart3" class="w-full h-auto" />
  </div>
  <article slot="content_slot" class="mb-10">
    <h2 class="text-xl font-extrabold mb-5">Bokeh + Networkx</h2>
    <p>
      Plotting Bokeh network graphs using NetworkX
      <br />
      These charts show stats for StackOverflow language statistics.
    </p>
    <p class="mt-6">
      <a
        class="text-sky-500"
        href="https://github.com/guinetik/python-ds/blob/master/pyscript-lab/static/py/bokeh_pandas.py"
        target="_blank">View source</a
      >
      <br />
      <a
        class="text-sky-500"
        target="_blank"
        href="https://www.kaggle.com/code/mayeesha/network-analysis-for-dummies-stackoverflow-data/notebook"
        >Adapted from this Kaggle</a
      >
    </p>
  </article>
</ExperimentCard>
