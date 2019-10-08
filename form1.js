let i = 0;

const submitForm = (ev) => {
    ev.preventDefault();
    const members = [];
    for (let j = 0; j < i; j++) {
        const name = document.getElementById('name_' + j).value;
        const lastname = document.getElementById('lastname_' + j).value;
        members.push({
            name: name,
            lastname: lastname
        });
    }
    console.log(members);
}

const addMember = () => {
    const familyContainer = document.getElementById('family-info');
    const group = createGroup(i);
    familyContainer.appendChild(group);
    i++;
}

const createElement = (type, className, innerText, id, onClick) => {
    const element = document.createElement(type);
    element.className = className;
    if(type === 'input') {
        element.placeholder = placeholder;
    
    }else if (type === 'button') {
        element.type = 'button';
    }
    if(innerText){
        element.innerHTML = innerText;
    }
    if (onClick) {
        element.onClick = onClick;
    }
    if (id) {
        element.id = innerText.toLowerCase() + '_' + id;
    }
    return element;
} 

const createGroup = id => {
    const row = createElement('div', 'row mb-2', null, 'row_' + id);
    const col1 = createElement('div', 'col');
    const col2 = createElement('div', 'col');
    const col3 = createElement('div', 'col');
    const input1 = createElement('input', 'form-control', 'Name', id);
    const input2 = createElement('input', 'form-control', 'Lastname', id);
    const removeBtn = createElement('button', 'btn', 'btn-danger', '', () => deleteElement(id));
    col1.appendChild(input1);
    col2.appendChild(input2);
    col3.appendChild(removeBtn);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    return row;
}

const deleteElement = id => {
    alert('Borrado', id);
}