<script>
  import ExperimentCard from "../../../components/experiment_card.svelte";
  import { getLink } from "../../../util/utils";
  //
  const props = {
    nextPage:'e/bokeh/1',
    previousPage:'e/interop/'
  }
</script>
<ExperimentCard {props}>
  <div slot="py_slot" id="chart" class="flex items-center justify-center h-full">
    <img width=200 height=200 src="https://i.gifer.com/origin/a7/a742fbe8ed45f6455cc767ab4c41997e_w200.gif" alt="Under Construction"/>
  </div>
  <article slot="content_slot">
    <h2 class="text-xl font-extrabold mb-5">Bokeh Network Graphs</h2>
    <p>Using Bokeh to plot NetworkX's graphs.</p>
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
  <py-env>- bokeh</py-env>
</svelte:head>
