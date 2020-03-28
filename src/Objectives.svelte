<script>
  import { onMount } from "svelte";
  let objectives = [];

  onMount(async () => {
    const res = await fetch(`./data/objectives.json`);
    objectives = await res.json();
  });
</script>

<div class="mb-8">
  <div class="bg-nord1 inline-flex flex-col p-6 rounded-lg shadow-lg">
    <h2 class="font-bold text-xl mb-2">
      Objectives
      <span class="opacity-50">~ 2020</span>
    </h2>

    <ol class="list-decimal list-inside">
      {#each objectives as objective}
        <li class="leading-loose">
          {@html objective}
        </li>
      {/each}
    </ol>
  </div>
</div>
