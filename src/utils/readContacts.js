import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const updatedContacts = JSON.parse(contacts);
    return updatedContacts;
  } catch (error) {
    console.error(error);
  }
};
