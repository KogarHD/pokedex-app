async function cargarPokedex() {
  const response = await fetch('pokedex.csv');
  const text = await response.text();
  const rows = text.split('\n').slice(1);
  const list = document.getElementById('pokemon-list');

  rows.forEach(row => {
    const [id, name, type] = row.split(',');
    if (name) {
      const li = document.createElement('li');
      li.textContent = `${name} (${type})`;
      list.appendChild(li);
    }
  });
}

document.getElementById('search').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const lis = document.querySelectorAll('#pokemon-list li');
  lis.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(searchTerm) ? '' : 'none';
  });
});

cargarPokedex();
