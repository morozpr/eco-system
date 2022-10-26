const contactsEl = document.querySelector('.contacts');
const addEl = document.querySelector('.contact-add');

function createContact(name, number, description) {
    const contactEl = document.createElement('div');
    contactEl.classList.add('contact');
    contactEl.innerHTML = `
    <div class="contact-head">
        <p id="contact-name">${name}</p>
        <textarea id="contact-name-input" class="hidden">${name}</textarea>
        <p id="contact-number">${number}</p>
        <textarea id="contact-number-input" class="hidden">${number}</textarea>
        <div class="contact-actions">
            <button class="contact-edit">edit</button>
            <button class="contact-delete">delete</button>
        </div>
    </div>
    <p id="contact-description">${description}</p>
    <textarea id="contact-description-textarea" class="hidden">${description}</textarea>
    `
    const editbtn = contactEl.querySelector('.contact-edit');
    const deletebtn = contactEl.querySelector('.contact-delete');
    const titleEl = contactEl.querySelector('#contact-name');
    const numberEl = contactEl.querySelector('#contact-number');
    const textEl = contactEl.querySelector('#contact-description');
    const titleInputEl = contactEl.querySelector('#contact-name-input');
    const numberInputEl = contactEl.querySelector('#contact-number-input');
    const textInputEl = contactEl.querySelector('#contact-description-textarea');

    editbtn.addEventListener('click', (e) => {
        titleEl.classList.toggle('hidden');
        numberEl.classList.toggle('hidden');
        textEl.classList.toggle('hidden');

        titleInputEl.classList.toggle('hidden');
        numberInputEl.classList.toggle('hidden');
        textInputEl.classList.toggle('hidden');

    });

    deletebtn.addEventListener('click', (e) => {
        contactEl.remove();
    });

    titleInputEl.addEventListener('input', (e) => {
        titleEl.innerText = e.target.value;
    })

    textInputEl.addEventListener('input', (e) => {
        numberEl.innerText = e.target.value;
    })

    textInputEl.addEventListener('input', (e) => {
        textEl.innerText = e.target.value;
    })

    return contactEl;
}

addEl.addEventListener('click', (e) => {
    const el = createContact('Title','Number', 'Description');
    contactsEl.appendChild(el);
})