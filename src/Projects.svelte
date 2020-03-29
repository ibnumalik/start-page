<script>
  import { onMount } from "svelte";

  let projects = [];

  onMount(async () => {
    const res = await fetch("/data/projects.json");
    projects = await res.json();
  });
</script>

<div class="block">
  <h2 class="font-bold text-lg mb-4 text-nord6">Projects</h2>
  <ul>
    {#each projects as project}
      <li class="mb-2 max-w-18">
        <div class="py-3 rounded-md flex flex-col items-start">
          <p class="font-bold">{project.name}</p>
          <div class="buttons mt-4">
            <a
              class="bg-nord8 px-2 py-1 mr-2 rounded text-nord0"
              href={project.repo}>
              Repo
            </a>
            <a
              class="px-2 py-1 mr-2 rounded bg-nord14 text-nord0"
              href={project.link}>
              Local
            </a>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
