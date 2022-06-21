<script>
  import "../app.css";
  import Nav from "../components/nav.svelte"
</script>

<div class="w-full h-full bg-gray-600">
  <Nav></Nav>
  <slot />
</div>
