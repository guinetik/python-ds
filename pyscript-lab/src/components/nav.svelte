<script>
  import { getLink } from "../util/utils";
</script>

<nav class="bg-gray-100">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="flex space-x-4">
        <!-- logo -->
        <div>
          <a
            href={getLink("/")}
            class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
          >
            <img src={getLink("images/python.svg")} alt="PyScript L.A.B" />
            <span class="font-bold">PyScript L.A.B</span>
          </a>
        </div>

        <!-- primary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            href={getLink("e/repl")}
            class="py-5 px-3 text-sky-500 hover:text-yellow-500">R.E.P.L</a
          >
          <a
            href={getLink("e/interop")}
            class="py-5 px-3 text-sky-500 hover:text-yellow-500"
            >Interoperability</a
          >
          <a
            href={getLink("e/bokeh")}
            class="py-5 px-3 text-sky-500 hover:text-yellow-500">Bokeh</a
          >
        </div>
      </div>

      <!-- secondary nav -->
      <div class="hidden md:flex items-center space-x-1">
        <a
          href="https://linkedin.com/in/guinetik"
          class="py-2 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-300"
          ><img
            class="inline w-6 h-6"
            src={getLink("images/linkedin.svg")}
            alt="Linkedin"
          /> Linkedin
        </a>
        <a
          href="https://github.com/guinetik"
          class="py-2 px-3 bg-slate-400 hover:bg-slate-300 text-slate-900 hover:text-slate-800 rounded transition duration-300"
          ><img
            class="inline"
            src={getLink("images/github.svg")}
            alt="Github"
          /> Github
        </a>
      </div>

      <!-- mobile button goes here -->
      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- mobile menu -->
  <div class="mobile-menu hidden md:hidden">
    <a
      href={getLink("e/repl")}
      class="py-5 px-3 text-sky-500 hover:text-yellow-500">R.E.P.L</a
    >
    <a
      href={getLink("e/interop")}
      class="py-5 px-3 text-sky-500 hover:text-yellow-500">Interoperability</a
    >
    <a
      href={getLink("e/bokeh")}
      class="py-5 px-3 text-sky-500 hover:text-yellow-500">Bokeh</a
    >
  </div>
</nav>
