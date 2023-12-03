// client.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
projectId: 'tw3txe2x', // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);