<script>
  import { getLink } from "../util/utils";
</script>

<main class="w-full">
  <div class="py-10 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-2xl overflow-hidden w-3/4 ">
      <!--     image -->
      <div class=" md:flex">
        <img
          class="w-full md:w-2/3 object-cover object-center p-1 rounded-lg"
          src={getLink("images/pyscript.png")}
          alt="PyScript"
        />
        <div class="p-8 space-y-3 border-slate-900 md:border-l sm:border-t">
          <h2 class="text-xl font-extrabold mb-5">Hi there</h2>
          <p>
            These are some studies on PyScript and trying to find nice use cases
            for the technology. Also, this repo tries to explore how convinient
            it is to deal with python scripts inside an already defined project
            strucutre as well as asking how well PyScript interacts with a JS
            framework like Svelte.
          </p>
          <ul class="list-disc mx-4">
            <li>
              <a
                href={getLink("e/bokeh")}
                class="text-blue-500 hover:text-blue-900">PyScript + Bokeh</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!--     footer -->
      <footer class="py-3 px-6 bg-slate-800 text-xs text-white">
        <div id="" />
      </footer>
    </div>
  </div>
</main>
