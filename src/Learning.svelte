<script>
  import { onMount } from 'svelte';

  const newEducation = { academy: '', link: '', subject: 'New Subject' };
  let educations = [];
  let editMode = false;
  $: editButtonText = editMode ? 'done' : 'edit';

  onMount(async () => {
    const res = await fetch('/data/learning.json');
    educations = await res.json();
  });

  function edit() {
    editMode = !editMode;
  }

  function add() {
    educations = [...educations, newEducation];
  }
</script>

<div class="block">
  <div class="flex items-center justify-between mb-4">
    <h2 class="mr-auto text-lg font-bold text-nord6">Continuous Learning</h2>
    {#if editMode}
    <button
      on:click="{add}"
      class="mr-2 text-opacity-25 text-nord14 hover:text-opacity-75"
    >
      add
    </button>
    {/if}
    <button
      on:click="{edit}"
      class="text-opacity-25 text-nord9 hover:text-opacity-75"
    >
      {editButtonText}
    </button>
  </div>
  <ul class="-mx-2">
    {#each educations as education}
    <li class="mb-2">
      {#if editMode}
      <div
        class="flex flex-col items-start px-4 py-3 mb-4 rounded-md max-w-18 bg-nord1"
      >
        <input
          placeholder="New Subject"
          class="w-full px-3 py-1 mb-3 rounded shadow-inner bg-nord4 text-nord3"
          type="text"
          bind:value="{education.subject}"
        />
        <input
          placeholder="Which Academy"
          class="w-full px-3 py-1 mb-3 rounded shadow-inner bg-nord4 text-nord3"
          type="text"
          bind:value="{education.academy}"
        />
        <input
          placeholder="Course Link"
          class="w-full px-3 py-1 rounded shadow-inner bg-nord4 text-nord3"
          type="text"
          bind:value="{education.link}"
        />
      </div>
      {:else}
      <a
        target="_blank"
        class="flex flex-col items-start px-2 py-3 rounded-md max-w-18 hover:bg-nord2"
        href="{education.link}"
      >
        <span class="mb-4 font-bold">{education.subject}</span>
        <span class="px-1 text-sm rounded bg-nord9 text-nord0">
          {education.academy}
        </span>
      </a>
      {/if}
    </li>
    {/each}
  </ul>
</div>
