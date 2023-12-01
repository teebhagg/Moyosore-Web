
import { client } from "../../../sanity/client";
import { ContactInterface } from "../interface/contact";

export const getContactData = async () => {
  const contactQuery = `*[_type == 'contact'] `;
  const contactData: ContactInterface[] = await client.fetch(contactQuery);
  return { contactData };
};
