{
    //
    // Single element
    //

    console.log(document.getElementById('my-form'));
    console.log(document.querySelector('h1'));

    const form = document.getElementById('my-form');
    console.log(form);

    //
    // Multiple element
    //

    console.log(document.querySelectorAll('.item'));

    // HTMLCollection
    console.log(document.getElementsByClassName('item'));

    //
    // Using HTML elements
    //

    const items = document.querySelectorAll('.item');
    items.forEach((item) => console.log(item));

    const ul = document.querySelector('.items');

    // ul.remove();
    ul.lastElementChild.remove();
    ul.firstElementChild.textContent = 'Hello';
    ul.children[1].innerText = 'Brad';
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

    const btn = document.querySelector('.btn');
    btn.style.background = 'red';
}

// Events
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevents submiting form
    console.log('click');
    console.log(e);
    console.log(e.target.className);
    
    document.querySelector('#my-form').style.background = '#ccc'

    // adds css style
    // document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>HIIIIIIIIIIII</h1>';
})

btn.addEventListener('mouseover', (e) => {
    e.preventDefault(); // prevents submiting form
    console.log('MOUSE OVER');
})

btn.addEventListener('mouseout', (e) => {
    e.preventDefault(); // prevents submiting form
    console.log('MOUSE OUT');
})
})