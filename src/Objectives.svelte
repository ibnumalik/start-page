<script>
  import { onMount } from 'svelte';
  import { objectives } from './stores';
  let editMode = false;
  $: editButtonText = editMode ? 'done' : 'edit';

  function toggleEdit() {
    editMode = !editMode;
  }
</script>

<div class="mb-8">
  <div class="inline-flex flex-col p-6 rounded-lg shadow-lg bg-nord1">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-xl font-bold">
        Objectives
        <span class="opacity-50">~ 2020</span>
      </h2>

      <button
        class="px-2 text-sm text-opacity-75 rounded hover:bg-nord10 hover:text-nord6 text-nord10"
        on:click="{toggleEdit}"
      >
        {editButtonText}
      </button>
    </div>

    {#if $objectives}
    <ol class="list-decimal list-inside">
      {#each $objectives as objective}
      <li class="mb-2 leading-loose rounded-lg w-500">
        {#if editMode}
        <input type="text" bind:value="{objective}" class="w-11/12 bg-nord1" />
        {:else}
        <span> {@html objective} </span>
        {/if}
      </li>
      {/each}
    </ol>
    {/if}
  </div>
</div>
