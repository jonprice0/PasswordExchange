function gatewayHandler(event) {
    event.preventDefault();

    document.location.replace('/join');
};

document.querySelector('#join').addEventListener('click', gatewayHandler);