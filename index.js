window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('ServiceWorker.js')
            .then(async(registration) => {
                const permission = await window.Notification.requestPermission();
                if(permission !== `granted`){
                    throw new Error(`permission not granted for Notificaion`);
                }
                const title = `simple title`;
                const options = {
                    body: ` this is very Simple piece of body text. /n second line of body text :)`
                };
                registration.showNotification(title, options);
                console.log('service worker register')
            })
    }
})

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        for (var i = 0; i < json.length; i++) {
            var todo = document.getElementById('todo')
            var div = document.createElement("div");
            var h2 = document.createElement('h2');
            h2.setAttribute('class','todos')
            h2.innerHTML = json[i].title
            div.appendChild(h2)
            todo.appendChild(div);
        }
    })