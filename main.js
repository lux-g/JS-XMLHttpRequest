const btn = document.querySelector('button');
btn.addEventListener('click', displayData)

const xhr = new XMLHttpRequest();

function displayData(){
    xhr.open('GET', './sample.txt');
    xhr.onreadystatechange = function(){
        console.log(xhr)
        if(xhr.readyState === 4 && xhr.status === 200){
            //console.log(xhr.responseText)
            const text = document.createElement('p');
            text.innerHTML = xhr.responseText;
            document.body.append(text)
    
        } else {
            console.log({
                status: xhr.statusText,
                text: xhr.statusText,
                state: xhr.readyState
            });
        }
    }
    xhr.send();
}


console.log('hello')
