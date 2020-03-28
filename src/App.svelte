<script>
  import Header from "./Header.svelte";
  import Learning from "./Learning.svelte";
  import Objectives from "./Objectives.svelte";
  import Projects from "./Projects.svelte";

  const name = "Shaiful Aiman";
</script>

<style>

</style>

<main class="min-h-screen bg-nord0 text-nord4 font-sans">
  <div class="container mx-auto">
    <Header {name} />

    <Objectives />

    <div class="flex">
      <section class="flex-auto">
        <Learning />
      </section>

      <section class="flex-auto">
        <Projects />
      </section>
    </div>
  </div>
</main>
