// addEventListener() takes two arguments:

// the name of the event
// a callback function to "handle" the event


function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
    alert('I was clicked yo');
    })

    
}


