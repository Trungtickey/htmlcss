function storePlayer() {
    var playerId = document.getElementById('playerId').value;
    localStorage.setItem(playerId, playerId);
    displayPlayers();
}

function removePlayer() {
    var playerId = document.getElementById('playerId').value;
    localStorage.removeItem(playerId);
    displayPlayers();
}

function displayPlayers() {
    var playersList = document.getElementById('playersList');
    playersList.innerHTML = '';
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var li = document.createElement('li');
        li.textContent = 'ID cầu thủ: ' + key;
        playersList.appendChild(li);
    }
}

// Hiển thị danh sách cầu thủ khi tải trang
displayPlayers();