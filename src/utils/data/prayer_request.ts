import { client } from "../../../sanity/client";
import { PrayerRequestInterface } from "../interface/prayer_request";

export const getPrayerRequest = async () => {
  const prayerRequestQuery = `*[_type == 'prayer' ][0]
  `;
  const prayerRequest: PrayerRequestInterface = await client.fetch(prayerRequestQuery);
  console.log(prayerRequest);
  return { prayerRequest };
};
