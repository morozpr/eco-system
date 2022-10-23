const notesEl = document.querySelector('.notes');
const addEl = document.querySelector('.note-add');

function createNote(title, text) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
    <div class="note-head">
        <p id="note-title">${title}</p>
        <textarea id="note-title-input" class="hidden">${title}</textarea>
        <div class="note-actions">
            <button class="note-edit">edit</button>
            <button class="note-delete">delete</button>
        </div>
    </div>
    <p id="note-text">${text}</p>
    <textarea id="note-textarea" class="hidden">${text}</textarea>
    `
    const editbtn = noteEl.querySelector('.note-edit');
    const deletebtn = noteEl.querySelector('.note-delete');
    const titleEl = noteEl.querySelector('#note-title');
    const textEl = noteEl.querySelector('#note-text');
    const titleInputEl = noteEl.querySelector('#note-title-input');
    const textInputEl = noteEl.querySelector('#note-textarea');

    editbtn.addEventListener('click', (e) => {
        titleEl.classList.toggle('hidden');
        textEl.classList.toggle('hidden');

        titleInputEl.classList.toggle('hidden');
        textInputEl.classList.toggle('hidden');

    });

    deletebtn.addEventListener('click', (e) => {
        noteEl.remove();
    });

    titleInputEl.addEventListener('input', (e) => {
        titleEl.innerText = e.target.value;
    })

    textInputEl.addEventListener('input', (e) => {
        textEl.innerText = e.target.value;
    })

    return noteEl;
}

addEl.addEventListener('click', (e) => {
    const el = createNote('Title', 'Description');
    notesEl.appendChild(el);
})