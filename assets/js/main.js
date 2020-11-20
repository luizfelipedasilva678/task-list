(function (){
    let ul = document.querySelector('.tasks');
    let input = document.querySelector('.new-task');
    let taskValue = 0;

    function createElement(elem) {
        let element = document.createElement(elem);
        return element;
    }

    function createText(txt) {
        let text = document.createTextNode(txt);
        return text;
    }

    function addAttribute(elem, attr, value) {
        elem.setAttribute(attr, value);
    }

    function insertLiInHtml(elem, txt) {
        let button = createElement('button');
        let text = createText('Delete');
        
        button.classList.add('delete');
        button.appendChild(text);
        elem.appendChild(txt);
        elem.appendChild(button);
        ul.appendChild(elem);
    }

    function removeElement(target) {
        target.remove();
    }

    function save(tasks, targetId) {
        localStorage.setItem(targetId, tasks);
    }

    function remove(targetId) {
        localStorage.removeItem(targetId);
    }
        
    document.addEventListener('click', function (e) {

        if(e.target.className === 'add') {
            if(input.value !== '') {
                save(input.value, taskValue);
                let DOMElement = createElement('li');
                addAttribute(DOMElement, 'id', taskValue++);
                let txt = createText( localStorage.getItem(DOMElement.getAttribute('id')) );
                insertLiInHtml(DOMElement, txt);
                input.value = '';
            } else {
                alert('Please enter a value');
            }
        }

        if(e.target.className === 'delete') {
            removeElement(e.target.parentNode);
            remove(e.target.parentNode.id);
        }
    })

    window.addEventListener('load', function(){
        if(localStorage.length > 0) {
            Object.keys(localStorage).forEach(function(value){
                let DOMElement = createElement('li');
                addAttribute(DOMElement, 'id', value);
                let txt = createText( localStorage.getItem(value) );
                insertLiInHtml(DOMElement, txt);
            });
        }
    })
})();