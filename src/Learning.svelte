<script>
  import { onMount } from 'svelte';

  let educations = [];

  onMount(async () => {
    const res = await fetch('/data/learning.json');
    educations = await res.json();
  });
</script>

<div class="block">
  <h2 class="font-bold text-lg mb-4 text-nord6">Continuous Learning</h2>
  <ul class="-mx-2">
    {#each educations as education}
    <li class="mb-2">
      <a
        target="_blank"
        class="px-2 py-3 rounded-md flex flex-col items-start max-w-18 hover:bg-nord2"
        href="{education.link}"
      >
        <span class="mb-4 font-bold">{education.subject}</span>
        <span class="bg-nord9 rounded text-sm px-1 text-nord0">
          {education.academy}
        </span>
      </a>
    </li>
    {/each}
  </ul>
</div>
