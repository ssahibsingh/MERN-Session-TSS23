let element = document.getElementById('time')

setInterval(() => {
    let date = new Date()
    // let hours = 
    // let minutes = 
    // let seconds = 

    // console.log(hours, minutes, seconds)

    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    element.innerHTML = time
}, 1000)

// Synchronous
// Event Handling
