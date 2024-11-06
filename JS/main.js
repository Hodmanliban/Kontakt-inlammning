const contactList = document.getElementById('contacts');
const contactBtn = document.getElementById('addContact');
const deleteList = document.getElementById("deleteList");
const errorMessage = document.getElementById("error-message");

function isInputValid(name, phone) {
    name = name.trim();
    phone = phone.trim();

    if (!name || !phone) {
        showError ("Du måste fylla i både namn och telefon");
        return false;
    }

    if (isNaN(phone) || phone === "" || phone <= 0) {
        showError("Fyll i ett giltigt telefonnummer");
        return false;
    }

   clearError(); 
    return true;
}

function showError(message) {
    errorMessage.innerHTML = message;
}

function clearError() {
    errorMessage.innerHTML = "";
}


function createInput(type,value) {
    const input = document.createElement("input");
    input.type = type;
    input.value = value.trim();
    input.disabled = true;
    return input;
}

function createBtn (text) {
    const button = document.createElement("button");
    button.textContent = text;
    return button;
}

function edits(nameInput, phoneInput, editButton) {
    if (nameInput.disabled) {
        nameInput.disabled = false;
        phoneInput.disabled = false; 
        editButton.textContent = "spara";
    } else {
        if (isInputValid(nameInput.value, phoneInput.value)) {
            nameInput.disabled = true;
            phoneInput.disabled = true; 
            editButton.textContent = "ändra"
            clearError();
        }
    }
}

function deleteContact (listItem) {
   listItem.remove();
}

function clearContactList(){
    contactList.innerHTML ="";
}

function createContactElement (name, phone) {
    const list = document.createElement("li");
    const nameInput = createInput("text", name);
    const phoneInput = createInput("tel", phone);
    const editButton = createBtn ("ändra")
    const deleteButton = createBtn ("radera")


editButton.addEventListener("click", function (e) {
    e.preventDefault();
    edits(nameInput, phoneInput, editButton);
});

deleteButton.addEventListener("click", function (e) {
    deleteContact(list);
});

list.appendChild(nameInput);
list.appendChild(phoneInput);
list.appendChild(editButton)
list.appendChild(deleteButton)

return list;

}

function clearInput () {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}



contactBtn.addEventListener('click', function (e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    const phone = document.getElementById("phone").value;

    if (!isInputValid(name, phone)) {
        return; 
        
    }

    const newContact = createContactElement(name, phone);
    contactList.appendChild(newContact);
    clearInput();
});

deleteList.addEventListener ("click", clearContactList);