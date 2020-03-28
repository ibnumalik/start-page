<script>
  import { onMount } from "svelte";
  let objectives = [];

  onMount(async () => {
    const res = await fetch(`./data/objectives.json`);
    const data = await res.json();
    objectives = data.objectives;
  });
</script>

<div class="mb-8">
  <h2 class="font-bold text-xl mb-2">Objectives <span class="opacity-50"> ~ 2020</span></h2>

  <ol class="list-decimal list-inside">
    {#each objectives as objective}
      <li class="leading-loose">
        {@html objective}
      </li>
    {/each}
  </ol>
</div>
