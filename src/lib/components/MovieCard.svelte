<script>
  export let movie;
</script>

<div class="card h-100">
  <img src={movie.poster} class="card-img-top" alt={movie.title} />

  <div class="card-body">
    <h5 class="card-title">
      <a href={`/movies/${movie._id}`}>{movie.title}</a>
    </h5>

    <p class="card-text mb-1">Jahr: {movie.year}</p>
    <p class="card-text mb-1">Dauer: {movie.length}</p>
  </div>
</div>