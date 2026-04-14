<script>
  export let form;
</script>

<h1>Neuen Film erfassen</h1>

{#if form?.error}
  <div class="alert alert-danger">{form.error}</div>
{/if}

<form method="POST" class="mt-3">
  <div class="mb-3">
    <label for="title" class="form-label">Titel</label>
    <input
      id="title"
      name="title"
      type="text"
      class="form-control"
      value={form?.values?.title ?? ""}
      required
    />
  </div>

  <div class="mb-3">
    <label for="year" class="form-label">Jahr</label>
    <input
      id="year"
      name="year"
      type="number"
      class="form-control"
      value={form?.values?.year ?? ""}
      required
    />
  </div>

  <div class="mb-3">
    <label for="length" class="form-label">Dauer</label>
    <input
      id="length"
      name="length"
      type="text"
      class="form-control"
      placeholder="z.B. 114 Minuten"
      value={form?.values?.length ?? ""}
      required
    />
  </div>

  <div class="mb-3">
    <label for="poster" class="form-label">Bild-URL</label>
    <input
      id="poster"
      name="poster"
      type="text"
      class="form-control"
      value={form?.values?.poster ?? ""}
    />
  </div>

  <button type="submit" class="btn btn-primary">Film speichern</button>
  <a href="/movies" class="btn btn-secondary ms-2">Abbrechen</a>
</form>