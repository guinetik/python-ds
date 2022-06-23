import { SiteMap, Page, PageProp } from "../util/SiteMap";
import { getLink } from "./utils";
import { writable } from "svelte/store";
//
const pages = [
  new Page("repl", "R.E.P.L", getLink("e/repl"), [
    new PageProp("show", "all"), // show in all menus
    new PageProp("prev_page", getLink("/")), // what page links to this
    new PageProp("next_page", getLink("e/interop")), // what page this links to
  ]),
  new Page("interop", "Interoperability In Python", getLink("e/interop"), [
    new PageProp("show", "all"),
    new PageProp("prev_page", getLink("e/repl")),
    new PageProp("next_page", getLink("e/bokeh")),
  ]),
  new Page("bokeh_index", "Bokeh", getLink("e/bokeh"), [
    new PageProp("show", "all"),
    new PageProp("prev_page", getLink("e/interop")),
    new PageProp("next_page", getLink("e/bokeh/1")),
  ]),
  new Page("bokeh_1", "Bokeh + Pandas", getLink("e/bokeh/1"), [
    new PageProp("show", "none"), //show in no menus
    new PageProp("prev_page", getLink("e/bokeh")),
    new PageProp("next_page", getLink("e/bokeh/2")),
  ]),
  new Page("bokeh_2", "Bokeh + NetworkX", getLink("e/bokeh/2"), [
    new PageProp("show", "none"),
    new PageProp("prev_page", getLink("e/bokeh/1")),
    new PageProp("next_page", getLink("e/media")),
  ]),
  new Page("media", "Media", getLink("e/media"), [
    new PageProp("show", "all"),
    new PageProp("prev_page", getLink("e/bokeh/2")),
    new PageProp("next_page", getLink("/")),
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
class="py-5 px-3 hover:text-yellow-500">{title}</a>`);
//////
siteMap.setMobileTemplate(`
<li class="border-b border-inherit">
    <a href="{url}" class="block p-4 hover:text-white hover:bg-yellow-500">{title}</a>
</li>`);
//
export let SiteMapStore = writable(siteMap);
export default SiteMapStore;
