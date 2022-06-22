<!-- 
    This component is a Svelte representation for a SiteMap page link
    The idea here is to onMount replace the component's contents with the SiteMap page link contents
 -->
<script>
    import {onMount} from "svelte";
    export let link = null;
    let container;
    //
    onMount(() => {
        var div = document.createElement('div');
        div.innerHTML = link.trim();
        container.parentNode.replaceChild(div.firstChild, container);
    })
</script>
<div bind:this={container}></div>