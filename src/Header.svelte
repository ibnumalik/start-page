<script>
  export let name;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const d = new Date();

  const date = d.toLocaleDateString('en-MY', options);
</script>

<div class="header pt-12 pb-16">
  <hr class="mb-20 opacity-25" />
  <p class="text-sm uppercase mb-2 opacity-75">{date}</p>
  <h1 class="text-4xl font-bold">Hello {name}!</h1>
</div>
