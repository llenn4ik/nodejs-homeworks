const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  //выводит в консоль список контактов
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) throw err;
    console.table(data);
  });
}

function getContactById(contactId) {
  //получает Id контакта, перебирает массив, если находит 
  //такойже id выводит данные пользователя в консоль

  fs.readFile(contactsPath, "utf8", (err, data) => {

    if (err) throw err;
    const users = JSON.parse(data.toString());
    const userById = users.find((user) => user.id === contactId);
    console.log(userById);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {

    if (err) throw err;
    const users = JSON.parse(data.toString());
    const userById = users.find((user) => user.id === contactId);
    console.log(userById);
      // вот дальше не понимаю как этого userById удалить из users?

  });
}

function addContact(name, email, phone) {
  // ...твой код
}



module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};