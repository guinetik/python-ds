const d=n=>{let t={py_div:null,output_div:null,runScript:(e,r,i)=>{t._run(e,r,{script:!0,createOutputDiv:i})},runCode:(e,r,i)=>{t._run(e,r,{script:!1,createOutputDiv:i})},runCodeOnScript:(e,r,i,u)=>{t._run(e,i,{script:!0,scriptPath:r,createOutputDiv:u})},createOutput:e=>{let r=document.createElement("div");return r.id=e,document.body.appendChild(r),r},_run:(e,r,i)=>{try{i.createOutputDiv?t.output_div=t.createOutput(r):t.output_div=document.getElementById(r),t.run(e,t.output_div,i)}catch(u){t.clearPyDiv(),console.error("RunScript",u)}},run:(e,r,i)=>{let u=`<py-script output="${r.id}">${e}</py-script>`;i&&i.script&&(i.scriptPath?u=`<py-script output="${r.id}" id="${r.id}_script">${e}</py-script>`:u=`<py-script output="${r.id}" id="${r.id}_script" src="${e}"></py-script>`);let c=document.createElement("div");c.innerHTML=u,t.py_div=c.firstElementChild,document.body.appendChild(t.py_div);try{t.py_div.evaluate()}catch(p){throw t.clearPyDiv(),console.error("Python error:"),console.error(p),p}},clearPyDiv:()=>{t.py_div&&(t.py_div.remove(),t.py_div=null)},clearOutput:()=>{t.output_div&&(t.output_div.remove(),t.output_div=null)},destroy:e=>{e&&t.clearOutput(),t.clearPyDiv()}};return t};export{d as R};