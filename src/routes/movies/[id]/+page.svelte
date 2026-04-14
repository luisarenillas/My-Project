<script>
  export let data;
</script>

<div class="row">
  <div class="col-md-4">
    <img
      src={data.movie.poster}
      alt={data.movie.title}
      class="img-fluid rounded"
    />
  </div>

  <div class="col-md-8">
    <h1>{data.movie.title}</h1>
    <p><strong>Jahr:</strong> {data.movie.year}</p>
    <p><strong>Dauer:</strong> {data.movie.length}</p>

    <p><strong>Schauspieler:innen:</strong></p>
    <ul>
      {#each data.movie.actors as actor}
        <li>{actor}</li>
      {/each}
    </ul>

    <p><strong>Watchlist:</strong> {data.movie.watchlist ? "Ja" : "Nein"}</p>

    <a href="/movies" class="btn btn-secondary mt-3">Zurück</a>
  </div>
</div>