// ? selecting elements in the document
// *1. By element  --> getElementsByTagName()
// *2. by id  --> getElementById()
// *3 querySelector()



// console.log(document.getElementsByTagName("p")[1])
// console.log(document.getElementByTagName("p"))


// const p = document.getElementsByTagName("p");
// console.log(p);

// console.log(document.getElementById("message"));



// * Different selectors 
// ! 1. universal selector
// const p = document.querySelector('*');

// ! 2. type selector (element name)
// const p = document.querySelector('p');
// console.log(p);

// ! 3. class selector
// const p = document.querySelectorAll('.message');
// console.log(p);
// only first element

// const p = document.querySelectorAll('.message');

// ! 4. id selector
// const p = document.querySelector('#message');  


// document.write("Hello World")



// Creating Element with JS
{/* Create Element
   * Add Element to HTML
    * Attach Element to document 
/}



{/* <div>
<p>CreateElement example</p>
</div> */}

//  * create element

// ? create a new element 'div'
// let div = document.createElement('div');

// ?adding an HTML snippet to the 'div'
// div.innerHTML = '<p>CreateElement example</p>';

// // ?attach the div to the document, you use the appendChild() method:
// document.body.appendChild(div);
// console.log(div);

// ? adding a id to div,
// div.id="basic"
// console.log(div);

// ? adding a class to div,
// div.className ="createdClass"
// console.log(div);




// Accessing the Text Content of an Element
// ? innerHTML
// let note = document.getElementById('note');
// console.log(note.innerHTML);


// ? innerText
// let note = document.getElementById('note');
// console.log(note.innerText);



//  ? textContent
// let note = document.getElementById('note');
// console.log(note.textContent);


// innerText takes the CSS style into account and returns only human-readable text.
// Use innerHTML property of an element to get or set HTML contained within the element.




// ! setting inline styles
// let p = document.querySelector('#content');
// p.style.color = 'red';
// p.style.fontWeight = 'bold';
// console.log(p);


// ! setting class attribute
// let p = document.querySelector('#content');
// p.className = 'highlighted';
// console.log(p);

// Other way to add class
// p.classList.add('highlighted');