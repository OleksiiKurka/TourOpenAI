'use server';

import OpenAI from 'openai';
import { envUtil } from '.';

const env = envUtil.getEnv();

const openAI = new OpenAI({ apiKey: env.openAI });

export const genateImag = async () => {
  console.log('imgimgimg');
  console.log('imgimgimg');

  const img = await openAI.images.generate({
    prompt: `Generate a logo for a website, the idea of which is to generate city tours with the help of artificial intelligence, the logo should be associated with an assistant, AI, a planet.`,
    n: 1,
    size: '512x512'
  });

  console.log(img);
  console.log(img?.data?.[0]?.url);
};

export const genarateTourResponse = async ({
  city,
  country
}: {
  city: string;
  country: string;
}): Promise<string | null> => {
  const query = `Find a ${city} in this ${country}.
  If ${city} in this ${country} exists, create a list of things tourists can do in this ${city},${country}. It can accommodate cuisine, holidays, festivals, places of interest, sightseeing
  Once you have a list, create a one-day tour. Response should be in the following JSON format:
  {
    "tour": {
      "city": "${city}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "description of the city and tour",
      "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
    }
  }
  If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return { "tour": null }, with no additional characters.`;

  try {
    const response = await openAI.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a tour guide' },
        {
          role: 'user',
          content: query
        }
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0
    });

    const tourData = JSON.parse(response.choices[0].message.content || '');
    return tourData;
  } catch (error) {
    console.log(error);
    return null;
  }
};
