<script>
  import { getLink } from "../util/utils";
  import SiteMapStore from "../util/SiteMapStore";
  import SiteMapLink from "./SiteMapLink.svelte";
  import { page } from "$app/stores";
  //
  let siteMap = null;
  let mobileLinks = [];
  let mainLinks = [];
  //
  SiteMapStore.subscribe((s) => {
    siteMap = s;
    mainLinks = siteMap.getMainLinks();
    mobileLinks = siteMap.getMobileLinks();
  });
  let toggleBurgerMenu = false;
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
          {#each mainLinks as link}
            <SiteMapLink
              template={link.template}
              page={link.page}
              bind:active={$page.url.pathname}
              activeClass="main_menu_active"
            />
          {/each}
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
      <div
        class="md:hidden flex items-center"
        on:click={() => {
          toggleBurgerMenu = !toggleBurgerMenu;
        }}
      >
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
  <nav
    id="mobile-navigation"
    class="{toggleBurgerMenu ? 'visible opacity-100' : 'opacity-0 invisible'}
    transition-all duration-500
    fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10"
  >
    <!-- UL Links -->
    <ul
      class="{toggleBurgerMenu ? 'translate-x-0' : 'translate-x-full'}
      absolute top-0 right-0 bottom-0 w-9/12 py-4 bg-white drop-shadow-2xl z-10 transition-all duration-500"
    >
      {#each mobileLinks as link}
        <SiteMapLink
          onclick={() => {toggleBurgerMenu = !toggleBurgerMenu}}
          template={link.template}
          page={link.page}
          active={$page.url.pathname}
          activeClass="mobile_menu_active"
        />
      {/each}
    </ul>

    <!-- Close Button -->
    <button
      class="absolute top-0 right-0 bottom-0 left-0 {toggleBurgerMenu
        ? 'opacity-100'
        : 'opacity-0'}"
      on:click={() => {
        toggleBurgerMenu = !toggleBurgerMenu;
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute top-2 left-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </nav>
</nav>
