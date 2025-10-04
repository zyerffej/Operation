js
document.getElementById('search-btn').addEventListener('click', () => {
  const q = document.getElementById('search-input')?.value.trim();
  const err = document.getElementById('error');
  const res = document.getElementById('results');
  err.textContent = "";
  res.innerHTML = "";

  try {
    if (!q) throw "Enter search term";
    const matches = futureProjects.filter(t =>
      t.description.toLowerCase().includes(q.toLowerCase())
    );
    if (!matches.length) throw `No results for "${q}"`;
    matches.forEach(t =>
      res.insertAdjacentHTML('beforeend',
        `<li><div class="card">${t.description}</div><span class="date">${t.date}</span></li>`
      )
    );
  } catch (e) {
    err.textContent = e;
  }
});