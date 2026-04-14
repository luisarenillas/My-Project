<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  export let data;
</script>

<div class="d-flex justify-content-between align-items-center mb-3">
  <p class="mb-0"><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
  <a href="/movies/create" class="btn btn-primary">Neuer Film</a>
</div>

<div class="row">
  {#each data.movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard movie={movie} />
    </div>
  {/each}
</div>