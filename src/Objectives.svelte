<script>
  import { onMount } from 'svelte';
  import { objectives } from './stores';
  import { Storage } from './storage';
  let editMode = false;
  $: editButtonText = editMode ? 'done' : 'edit';

  function toggleEdit() {
    if (editMode) {
      Storage.save('objectives', $objectives);
    }

    editMode = !editMode;
  }

  function add() {
    objectives.update((objectives$) => [...objectives$, '']);
  }

  function deletes(index) {
    objectives.update(objectives$ => [...objectives$.slice(0, index, ...objectives$.slice(index+1))])
  }
</script>

<div class="mb-8">
  <div class="inline-flex flex-col p-6 rounded-lg shadow-lg bg-nord1">
    <div class="flex items-center justify-between mb-2">
      <h2 class="mr-auto text-xl font-bold">
        Objectives
        <span class="opacity-50">~ 2020</span>
      </h2>

      {#if editMode}
      <button
        class="px-2 text-sm text-opacity-75 rounded text-nord14"
        on:click="{add}"
      >
        add
      </button>
      {/if}

      <button
        class="px-2 text-sm text-opacity-75 rounded hover:bg-nord10 hover:text-nord6 text-nord10"
        on:click="{toggleEdit}"
      >
        {editButtonText}
      </button>
    </div>

    {#if $objectives}
    <ol class="list-decimal list-inside">
      {#each $objectives as objective, i}
      <li class="mb-2 leading-loose rounded-lg w-500">
        {#if editMode}
        <input
          type="text"
          bind:value="{objective}"
          class="w-11/12 px-4 font-bold rounded-md shadow-inner bg-nord0"
        />
        <button class="text-xs text-nord11" on:click={() => deletes(i)}>d</button>
        {:else}
        <span> {@html objective} </span>
        {/if}
      </li>
      {/each}
    </ol>
    {/if}
  </div>
</div>
