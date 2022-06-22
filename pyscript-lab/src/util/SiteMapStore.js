import { SiteMap, Page, PageProp } from "../util/SiteMap";
import { writable } from "svelte/store";
//
const pages = [
  new Page("repl", "R.E.P.L", "e/repl", [
    new PageProp("show", "all"), // show in all menus
    new PageProp("prev_page", "/"), // what page links to this
    new PageProp("next_page", "e/interop"), // what page this links to
  ]),
  new Page("interop", "Interoperability In Python", "e/interop", [
    new PageProp("show", "all"),
    new PageProp("prev_page", "e/repl"),
    new PageProp("next_page", "e/bokeh"),
  ]),
  new Page("bokeh_index", "Bokeh", "e/bokeh", [
    new PageProp("show", "all"),
    new PageProp("prev_page", "e/interop"),
    new PageProp("next_page", "e/bokeh/1"),
  ]),
  new Page("bokeh_1", "Bokeh + Pandas", "e/bokeh/1", [
    new PageProp("show", "none"), //show in no menus
    new PageProp("prev_page", "e/bokeh"),
    new PageProp("next_page", "e/bokeh/2"),
  ]),
  new Page("bokeh_2", "Bokeh + Pandas", "e/bokeh/2", [
    new PageProp("show", "none"),
    new PageProp("prev_page", "e/bokeh"),
    new PageProp("next_page", "/"),
  ]),
  new Page("github", "Github", "https://github.com/guinetik", [
    new PageProp("show", "mobile"), // shows only on mobile
  ]),
  new Page("twitter", "Twitter", "https://twitter.com/guinetik", [
    new PageProp("show", "mobile"), // shows only on mobile
  ]),
];
const siteMap = new SiteMap(pages);
//////
siteMap.setMainMenuTemplate(`
<a
href="{url}"
class="py-5 px-3 text-sky-500 hover:text-yellow-500">{title}</a>`);
//////
siteMap.setMobileTemplate(`
<li class="border-b border-inherit">
    <a href="{url}" class="block p-4 text-sky-500 hover:text-white hover:bg-yellow-500">{title}</a>
</li>`);
//
export let SiteMapStore = writable(siteMap);
export default SiteMapStore;
