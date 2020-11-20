(function (){
    let ul = document.querySelector('.tasks');
    let input = document.querySelector('.new-task');

    document.addEventListener('click', function (e) {

        if(e.target.className === 'add') {
            let li = document.createElement('li');
            li.innerHTML = input.value;
            ul.appendChild(li);
        }
    })
})();