const bodyJoke = document.getElementById('body-joke');
const textJoke = document.getElementById('text-content')
const jokeBtn = document.getElementById('btn-joke')

function generateJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            textJoke.style.fontSize="15px";
        textJoke.innerHTML = JSON.parse(this.responseText).value;    
        } else {
            textJoke.innerHTML = `Something went wrong (Not Funny)`
        }
    };
    xhr.send()
}    
jokeBtn.addEventListener('click', generateJoke);



/*
const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);

        data.forEach((movie) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <strong>${movie.title}</strong> - ${movie.year};`
            document.querySelector('#restuls').appendChild(li);            
        });
    }
};

xhr.send();
*/