function divideGrupos() {
  const namesInput = document.getElementById('names').value.trim();
  const namesArray = namesInput.split('\n').map(name => name.trim());

  const numGrupos = parseInt(document.getElementById('num-groups').value);
  if (numGrupos < 1) {
    alert('A quantidade de grupos deve ser no mínimo 1.');
    return;
  }

  const shuffledNames = shuffleArray(namesArray);
  const grupos = [];

  for (let i = 0; i < numGrupos; i++) {
    grupos.push([]);
  }

  let grupoIndex = 0;
  shuffledNames.forEach(name => {
    grupos[grupoIndex].push(name);
    grupoIndex = (grupoIndex + 1) % numGrupos;
  });

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  grupos.forEach((grupo, index) => {
    outputDiv.innerHTML += `<p><strong>Grupo ${index + 1}:</strong> ${grupo.join(', ')}</p>`;
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}