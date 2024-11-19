const baseUrl = 'https://json-server--3000.local.webcontainer.io';

function displayData(data) {
  document.getElementById('output').innerHTML = JSON.stringify(data, null, 2);
}

function fetchPlayers() {
  fetch(`${baseUrl}/players`)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}

function fetchTeams() {
  fetch(`${baseUrl}/teams`)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}

function fetchMatches() {
  fetch(`${baseUrl}/matches`)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error:', error));
}