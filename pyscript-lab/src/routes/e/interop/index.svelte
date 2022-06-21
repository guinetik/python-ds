<script>
  import ExperimentCard from "../../../components/experiment_card.svelte";
  import { getLink } from "../../../util/utils";
  import RunPython from "../../../util/RunPython";
  import { onMount, onDestroy } from "svelte";
  //
  const props = {
    nextPage: "e/bokeh",
    previousPage: "e/repl",
  };
  //
  let inputName = "";
  let inputAge = "";
  // what script to load
  const pyScriptUrl = getLink("py/interop.py");
  /*
  BELOW WE CREATE 2 INSTANCES OF THE PYTHON RUNNER.
  ONE TO LOAD THE PYTHON SCRIPT WE WANT TO USE
  THE OTHER IS TO EXECUTING PYTHON CODE ON DEMAND.
  INITIALLY, I USED ONLY ONE RUNPYTHON OBJECT FOR BOTH LOADING SCRIPTS AND EXECUTING CODE,
  BUT MY TESTING SHOWED THAT SCOPING THESE SEPARATELY IS MORE STABLE AND EASIER TO CLEAN UP 
  SPECIALLY WHEN DEALING WITH COMPONENT-BASED UIS
  */
  // Define a RunPython instance to attach our script to
  let pyScriptRunner = RunPython();
  // When the screen loads, we want to load our script
  onMount(() => {
    console.log("onMount");
    pyScriptRunner.runScript(pyScriptUrl, "script_gutter", false);
  });
  // when the screen is destroyed we want to destroy all python tags
  onDestroy(() => {
    if (pyScriptRunner) pyScriptRunner.destroy();
  });
  // when the user clicks the button, execute py code via our pyCodeRunner
  const callPython = () => {
    try {
      // Define a RunPython insance to attach the code we want to execute to
      let pyCodeRunner = RunPython();
      const pyCode = `run('${inputName}', ${inputAge})`;
      pyCodeRunner.runCode(pyCode, "chart", false);
      pyCodeRunner.destroy(false);
    } catch (e) {
      alert("Python died. Try refreshing I guess :(");
    }
  };
</script>

<ExperimentCard {props}>
  <div
    slot="py_slot"
    id="chart"
    class="w-full h-full"
  />
  <article slot="content_slot" class="mb-10">
    <h2 class="text-xl font-extrabold mb-5">Interoperability (js to py)</h2>
    <p>This example shows how to call a python function from JS</p>
    <div class="flex bg-white items-center justify-center mt-8">
      <div class="px-1 py-2 border-2 border-grey rounded relative">
        <label
          class="absolute -my-[20px] -mx-2 bg-white px-2 text-grey-darker"
          for="txt_name">Name</label
        >
        <input
          bind:value={inputName}
          id="txt_name"
          type="text"
          class="appearance-none border-2 border-white rounded w-full py-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-white"
          placeholder="Who are you?"
        />
      </div>
      <div class="px-1 py-2 border-2 border-red rounded relative ml-16">
        <label
          class="absolute -my-[20px] -mx-2 bg-white px-2 text-red"
          for="txt_age">Age</label
        >
        <input
          bind:value={inputAge}
          id="txt_age"
          type="text"
          class="appearance-none border-2 border-white rounded w-full py-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-white"
          placeholder="How old are you?"
        />
      </div>
    </div>
    <button
      class="bg-green-400 flex-grow w-full py-2 px-3 mt-2"
      type="button"
      on:click={callPython}>Run</button
    >
    <p class="mt-4">
      <a class="text-sky-500" href={pyScriptUrl} target="_blank">View source</a>
    </p>
  </article>
</ExperimentCard>
