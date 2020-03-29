<script>
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const d = new Date();

  const date = d.toLocaleDateString("en-MY", options);
</script>

<div class="header pt-12 pb-8">
  <p class="opacity-50">Today is</p>
  <p class="text-5xl">{date}</p>
</div>
