const { table } = require("console");
const fs = require("fs");
const path = require("path");
const uuidv4 = require("uuid");

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
    // возвращает массив пользователей без того, что соответствует contactId
    const filterUsers = users.filter((user) => user.id !== contactId);
    console.log(filterUsers);

      // полученные  filterUsers в консоли
      

  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (err, data) => {

    if (err) throw err;
    const users = JSON.parse(data.toString());
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    // проверяет, есть или нет такой пользователь в контактах
    const newUsers = users.map((user) => user.name);
    if (newUsers.includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    // если контакта еще нет, добавляет его и выводит в консоль
    users.push(newContact);
console.log(newContact);
    
  });

}



module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};