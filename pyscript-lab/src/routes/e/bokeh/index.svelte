<script>
  import ExperimentCard from "../../../components/experiment_card.svelte";
  import { getLink } from "../../../util/utils";
  import RunPython from "../../../util/RunPython";
  import { onMount, onDestroy } from "svelte";
  //
  const props = {
    nextPage: "e/bokeh/1",
    previousPage: "e/interop/",
  };
  //
  let pyScriptRunner;
  onMount(() => {
    if (!pyScriptRunner) {
      pyScriptRunner = RunPython();
      pyScriptRunner.runScript(
        getLink("py/bokeh_index.py"),
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
  <div
    slot="py_slot"
    id="chart"
    class="flex items-center justify-center h-full"
  />
  <article slot="content_slot" class="mb-10">
    <h2 class="text-xl font-extrabold mb-5">Bokeh</h2>
    <p>Default example from PyScript Docs.</p>
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
  <py-env> - bokeh </py-env>
</svelte:head>
