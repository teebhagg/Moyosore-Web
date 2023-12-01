
import { HomeInterface } from "@/utils/interface/home";
import { client } from "../../../sanity/client";

export const getData = async () => {
  const homeQuery = "*[_type == 'home'] ";
  const homeData: HomeInterface[] = await client.fetch(homeQuery);

  return { homeData };
};
