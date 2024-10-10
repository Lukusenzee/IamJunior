

document.getElementById("inputHolder").addEventListener('keydown', (event) => {
    
    document.getElementById("outputHolder").innerText = 'You pressed the key: ' + event.key;
    if (event.key === 'Enter') {
        document.getElementById("inputHolder").value = '';
        console.log('After pressing the enter key input was cleared');
    }
});