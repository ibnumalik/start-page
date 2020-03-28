<script>
  import { onMount } from "svelte";

  let educations = [];

  onMount(async () => {
    const res = await fetch("/data/learning.json");
    educations = await res.json();
  });
</script>

<div class="block">
  <h2 class="font-bold text-lg mb-4">Continuous Learning</h2>
  <ul>
    {#each educations as education}
      <li class="mb-2 max-w-18">
        <a class="bg-nord2 px-4 py-3 rounded-md flex flex-col items-start" href={education.link}>
          <span class="mb-4 font-bold">{education.subject}</span>
          <span class="bg-nord9 rounded text-sm px-1  text-nord0">
            {education.academy}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</div>
