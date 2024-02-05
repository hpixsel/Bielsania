import { defineCollection, z } from "astro:content";

const gamesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    added: z.number(),
    title: z.string(),
    steam: z.string().optional(),
    gamejolt: z.string().optional(),
    imgs: z.array(z.string()),
    team: z.array(z.object({
      img: z.string(),
      name: z.string(),
      nickname: z.string(),
      role: z.array(z.string()),
      desc: z.string()
    }))
  })
})

export const collections = {
  games: gamesCollection,
};