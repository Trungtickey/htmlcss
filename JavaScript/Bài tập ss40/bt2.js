function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    localStorage.setItem(playerName, playerName);
    displayPlayers();
}

function displayPlayers() {
    const playersList = document.getElementById('playersList');
    playersList.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        li.textContent = localStorage.getItem(key);
        playersList.appendChild(li);
    }
}

// Hiển thị danh sách cầu thủ khi tải trang
displayPlayers();