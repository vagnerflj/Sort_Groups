function dividesGroups() {
  const namesInput = document.getElementById('names').value.trim();
  const namesArray = namesInput.split('\n').map(name => name.trim());

 

  const numGroups = parseInt(document.getElementById('num-groups').value);
  if (numGroups < 1) {
    alert('O número de grupos deve ser pelo menos 1.');
    return;
  }

  const shuffledNames = shuffleArray(namesArray);

  const groups = [];
  for (let i = 0; i < numGroups; i++) {
    groups.push([]);
  }

  let groupIndex = 0;
  shuffledNames.forEach(name => {
    groups[groupIndex].push(name);
    groupIndex = (groupIndex + 1) % numGroups;
  });

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';
  groups.forEach((group, index) => {
    outputDiv.innerHTML += `<p><strong>Grupo ${index + 1}:</strong> ${group.join(', ')}</p>`;
  });
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}