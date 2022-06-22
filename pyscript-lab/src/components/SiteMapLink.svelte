<!-- 
    This component is a Svelte representation for a SiteMap page link
    The idea here is to onMount replace the component's contents with the SiteMap page link contents
 -->
<script>
  import { onMount, beforeUpdate } from "svelte";
  import SiteMapStore from "../util/SiteMapStore";
  import { SiteMap, Page } from "../util/SiteMap";
  //
  /**
   * @type {String}
   **/
  export let template;
  /**
   * @type {String}
   **/
  export let active;
  /**
   * @type {String}
   **/
  export let activeClass = "active";
  /**
   * @type {Page}
   *
   **/
  export let page;
  /**
   * @type {Function}
   */
  export let onclick;
  /**
   * @type {SiteMap}
   */
  let siteMap;
  /**
   * @type {Node}
   */
  let container;
  /**
   * @type {HTMLElement}
   */
  let linkDiv;
  /**
   * @type {Page}
   */
  let activeSiteMapPage;
  //
  SiteMapStore.subscribe((s) => {
    siteMap = s;
  });
  const toggleActiveClasses = () => {
    if (activeSiteMapPage && linkDiv) {
      if (activeSiteMapPage.id === page.id) {
        linkDiv.classList.add(activeClass);
      } else {
        linkDiv.classList.remove(activeClass);
      }
    }
  };
  //
  onMount(() => {
    /**
     * @type {HTMLDivElement}
     * */
    var div = document.createElement("div");
    div.innerHTML = template.trim();
    //
    activeSiteMapPage = siteMap.getPageByUrl(active);
    console.log("activeSiteMapPage", activeSiteMapPage);
    //
    linkDiv = div.firstChild;
    linkDiv.addEventListener("click", onclick);
    //
    toggleActiveClasses();
    //
    container = container.parentNode.replaceChild(linkDiv, container);
  });
  beforeUpdate(() => {
    activeSiteMapPage = siteMap.getPageByUrl(active);
    toggleActiveClasses();
  });
</script>

<div bind:this={container} />
