<script>
  import ExperimentPage from "../../components/experiment_card.svelte";
  const props = {
    nextPage:'e/interop',
    previousPage:'/'
  }
</script>

<ExperimentPage {props}>
  <py-repl
    id="my-repl"
    auto-generate="true"
    class="w-full h-full"
    slot="py_slot"
  />
  <article slot="content_slot">
    <h2 class="text-xl font-extrabold mb-5">REPL</h2>
    <p>
      PyScript comes with a default REPL (read-evaluate-print-loop) html module
      that allows you to run python code form an HTML input.
      <br/>
      This is a pseudo notebook functionality that can make some interactive python code on the fly.
    </p>
  </article>
</ExperimentPage>