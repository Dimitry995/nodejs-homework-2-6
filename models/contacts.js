const fs = require("fs/promises");
const path = require("path");

const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
    const response = await fs.readFile(contactsPath);
	const data = JSON.parse(response);
	return data;
}

async function getContactById(contactId) {
    const contacts = await listContacts();
	const response = contacts.find(contact => contact.id === contactId);
    return response || null;
}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
	if (index === -1) {
		return null;
	}
	const [response] = contacts.splice(index, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return response;
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}

async function updateContact  (contactId, data)  {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId.toString());

  if (index === -1) return null;
  contacts[index] = { id: contactId, ...data };

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};