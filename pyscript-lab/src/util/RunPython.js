/**
 * Just a quick utility pseudo-class to provide an API to run py code on demand.
 * This code was loosely inspired by this post: https://www.jhanley.com/pyscript-create-the-py-script-tag-at-runtime/ (this guy is a monster btw)
 * I liked how he approached the problem and I just adapted it so it would be versatile and have a component structure and something of a lifecycle.
 * @param {} opts
 * @returns a pyrunner object capable of running py scripts in runtime
 */
const Runner = (opts) => {
  let pyRunner = {
    py_div: null,
    output_div: null,
    runScript: (script, outputId, createOutputDiv) => {
      pyRunner._run(script, outputId, {
        script: true,
        createOutputDiv: createOutputDiv,
      });
    },
    runCode: (code, outputId, createOutputDiv) => {
      pyRunner._run(code, outputId, {
        script: false,
        createOutputDiv: createOutputDiv,
      });
    },
    runCodeOnScript: (code, script, outputId, createOutputDiv) => {
      pyRunner._run(code, outputId, {
        script: true,
        scriptPath: script,
        createOutputDiv: createOutputDiv,
      });
    },
    createOutput: (outputId) => {
      let py_output = document.createElement("div");
      py_output.id = outputId;
      console.log("py_output", py_output);
      document.body.appendChild(py_output);
      return py_output;
    },
    _run: (code, ouputId, opts) => {
      console.log("!!!");
      console.log("RUN");
      console.log("RUN");
      console.log("RUN");
      console.log("RUN");
      console.log("!!!");
      try {
        console.log("_run", opts);
        if (opts.createOutputDiv) {
          console.log("creating output tag");
          pyRunner.output_div = pyRunner.createOutput(ouputId);
        } else {
          console.log("reusing output tag");
          pyRunner.output_div = document.getElementById(ouputId);
        }
        console.log(" pyRunner.output_div", pyRunner.output_div);
        pyRunner.run(code, pyRunner.output_div, opts);
      } catch (e) {
        pyRunner.clearPyDiv();
        console.error("RunScript", e);
      }
    },
    run: (py_code, py_output, opts) => {
      let html_tag = `<py-script output="${py_output.id}">${py_code}</py-script>`;
      if (opts) {
        if (opts.script) {
          if (opts.scriptPath) {
            html_tag = `<py-script output="${py_output.id}" id="${py_output.id}_script">${py_code}</py-script>`;
          } else {
            html_tag = `<py-script output="${py_output.id}" id="${py_output.id}_script" src="${py_code}"></py-script>`;
          }
        }
      }
      //
      console.log("tag", html_tag);
      // Create the DIV to attach the py-script tag
      let div = document.createElement("div");
      div.innerHTML = html_tag;
      //
      console.log("div", div);
      pyRunner.py_div = div.firstElementChild;
      //
      console.log("py_div", pyRunner.py_div);
      document.body.appendChild(pyRunner.py_div);
      try {
        console.log("evaluates", pyRunner.py_div);
        pyRunner.py_div.evaluate();
      } catch (error) {
        pyRunner.clearPyDiv();
        console.error("Python error:");
        console.error(error);
        throw error;
      }
    },
    clearPyDiv: () => {
      if (pyRunner.py_div) {
        pyRunner.py_div.remove();
        pyRunner.py_div = null;
      }
    },
    clearOutput: () => {
      if (pyRunner.output_div) {
        pyRunner.output_div.remove();
        pyRunner.output_div = null;
      }
    },
    destroy: (destroyOutput) => {
      if(destroyOutput) pyRunner.clearOutput();
      pyRunner.clearPyDiv();
    },
  };
  return pyRunner;
};

export default Runner;
