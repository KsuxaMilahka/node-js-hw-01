import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const updatedContacts = await readContacts();

  for (let i = 0; i < number; i++) {
    updatedContacts.push(createFakeContact());
  }
  await writeContacts(updatedContacts);
};

generateContacts(5);
