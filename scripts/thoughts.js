fetch('data/thoughts.json')
  .then(response => response.json())
  .then(thoughts => {
    const container = document.querySelector('.thoughts');
    container.innerHTML = ''; // clear placeholder

    thoughts.forEach(entry => {
      const div = document.createElement('div');
      div.classList.add('thought');
      div.innerHTML = `
        <span class="timestamp">${entry.date}</span>
        <p>${entry.text}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error loading thoughts:', error);
  });