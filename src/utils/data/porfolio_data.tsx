import { client } from "../../../sanity/client";
import { PortfolioInterface } from "../interface/home";

export const getPortfolios = async () => {
  const portfolioQuery = `*[_type == 'portfolio']`;
  const portfolioData: PortfolioInterface[] = await client.fetch(portfolioQuery);
  console.log(portfolioData);
  return { portfolioData };
};