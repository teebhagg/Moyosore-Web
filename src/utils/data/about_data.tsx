
import { client } from "../../../sanity/client";
import { AboutInterface } from "../interface/about";

export const getAboutData = async () => {
  const aboutQuery = `*[_type == 'about']`;
  const aboutData: AboutInterface[] = await client.fetch(aboutQuery);
  return { aboutData };
};
