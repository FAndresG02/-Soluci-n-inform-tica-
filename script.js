function orderNow(food, price) {
    window.location.href = `order.html?food=${encodeURIComponent(food)}&price=${price.toFixed(2)}`;
}

function gerNow() {
    window.location.href = 'gerInicio.html';
}

function inirNow() {
    window.location.href = 'inicio.html';
}

function emNow() {
    window.location.href = 'emple.html';
}

function editarNow() {
    window.location.href = 'edit.html';
}

