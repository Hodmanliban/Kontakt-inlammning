const form = document.getElementById('contact-form');
    const contactList = document.getElementById('contacts');
    const contactBtn = document.getElementById('addContact');
    const deleteList = document.getElementById("deleteList")
    const errorMessage = document.getElementById("error-message")


    function isInputValid(name,phone) {
        if (!name || !phone) {
            errorMessage.innerHTML = "Du måste fylla i både namn och telefon";
            return false; 
        } else {
            errorMessage.innerHTML ='';
            return true;
        }

    }

    contactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;

      if (!isInputValid(name, phone)) {
        return;
      }
   

      // Skapa nytt kontaktelement
      const list = document.createElement('li');
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.value = name;
      nameInput.disabled = true;

      const phoneInput = document.createElement('input');
      phoneInput.type = 'text';
      phoneInput.value = phone;
      phoneInput.disabled = true;

      const editButton = document.createElement('button');
      editButton.textContent = 'Ändra';
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Radera';

      editButton.addEventListener('click', function()  {
        nameInput.disabled = false; 
        phoneInput.disabled = false;
      });

      deleteButton.addEventListener('click',function() {
        // Lägg till funktionalitet för att ta bort kontakten
        list.remove();
      });

      list.appendChild(nameInput);
      list.appendChild(phoneInput);
      list.appendChild(editButton);
      list.appendChild(deleteButton);
      contactList.appendChild(list);

      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
    });

    deleteList.addEventListener('click', function(){
        contactList.innerHTML = '';
    }) 
