<script>
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const d = new Date();

  const date = d.toLocaleDateString('en-MY', options);

  function exports() {
    const rows = [
      ['whatev', 'dontcare', 'success'],
    ];

    let csvContent =
      'data:application/json;charset=utf-8,' + rows.map((e) => e.join(',')).join('\n');

    const encodedContent = encodeURI(csvContent);
    window.open(encodedContent);
  }
</script>

<div class="pt-12 pb-8 header">
  <p class="opacity-50">Today is</p>
  <div class="flex items-center justify-between">
    <p class="text-5xl">{date}</p>
    <button
      on:click="{exports}"
      class="text-opacity-25 hover:text-opacity-75 text-nord9"
    >
      export
    </button>
  </div>
</div>
