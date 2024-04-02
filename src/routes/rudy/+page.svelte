<script>
  import { base } from "$app/paths";

  let counter = 0;

  function add() {
    counter += 1;
  }
</script>

<h1>Hello! Welcome to my page!</h1>
<p>nlsdkhf;LSDH;FLSHAS;FDKLJSH</p>
<a href="{base}/colton">Go to colton's page</a>

<h2>You have clicked {counter} times!</h2>
<button on:click={add}>Click Me!</button>