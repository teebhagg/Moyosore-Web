import AboutPeek from "@/components/home/about_peek";
import BlogPeek from "@/components/home/blog_peek";
import ContactBanner from "@/components/home/contact_banner";
import CoverImage from "@/components/home/cover_image";
import PortfolioPeek from "@/components/home/portfolio_peek";
import ProjectsPeek from "@/components/home/projects";
import Image from "next/image";
import { client } from "../../sanity/client";
import { HomeInterface } from "@/utils/interface/home";
import { getData } from "@/utils/data/home_data";

export default async function HomePage() {
  const { homeData } = await getData();

  return (
    <main className="max-w-[1800px] mx-auto">
      <div className="flex flex-col items-center justify-between pt-10 pb-24 px-4 space-y-24">
        <CoverImage
          image={homeData[0].coverImage.image}
          title={homeData[0].coverImage.title}
          aboutLink={homeData[0].coverImage.aboutLink}
        />
        <AboutPeek
          header={homeData[0].aboutPeek.header}
          subheader={homeData[0].aboutPeek.subheader}
          image={homeData[0].aboutPeek.image}
          aboutLink={homeData[0].aboutPeek.aboutLink}
        />
        <PortfolioPeek images={homeData[0].portfolioPeek} />
        <BlogPeek
          header={homeData[0].blogPeek.header}
          subheader={homeData[0].blogPeek.subheader}
          image={homeData[0].blogPeek.image}
          blogLink={homeData[0].blogPeek.blogLink}
        />
        <ProjectsPeek data={homeData[0].projectsPeek} />
        <ContactBanner
          subTitle={homeData[0].contactMe.subTitle}
          link={homeData[0].contactMe.link}
          title={homeData[0].contactMe.title}
          banner={homeData[0].contactMe.banner}
        />
      </div>
    </main>
  );
}
// export const getData = async () => {
//   const homeQuery = "*[_type == 'home']";
//   const homeData: HomeInterface[] = await client.fetch(homeQuery);

//   return { homeData };
// };
