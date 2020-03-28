<script>
  import { onMount } from "svelte";

  let projects = [];

  onMount(async () => {
    const res = await fetch("/data/learning.json");
    projects = await res.json();
  });
</script>

<div class="block">
  <h2 class="font-bold text-lg mb-4">Projects</h2>
  <ul>
    {#each projects as education}
      <li class="mb-2">
        <a class="bg-nord2 p-2" href={education.link}>{education.academy} - {education.subject}</a>
      </li>
    {/each}
  </ul>
</div>
