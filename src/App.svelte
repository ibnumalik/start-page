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

    <div class="flex -m-2">
      <section class="flex-1 p-2 learning">
        <Learning />
      </section>

      <section class="flex-1 p-2 projects">
        <Projects />
      </section>
    </div>
  </div>
</main>
