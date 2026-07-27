import { defineCollection, z } from "astro:content";

const gamesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    added: z.number(),
    inDevelopment: z.boolean(),
    title: z.string(),
    description: z.string().optional(),
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

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    img: z.string(),
    name: z.string(),
    nickname: z.string(),
    role: z.array(z.string()),
    linkedin: z.string().optional(),
    facebook: z.string().optional(),
    twitter: z.string().optional()
  })
})

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    added: z.number(),
    img: z.string(),
    title: z.string(),
    link: z.string().optional(),
    changeSide: z.boolean().optional()
  })
})

const targiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.number(),
    name: z.string(),
    location: z.string(),
    img: z.string().optional(),
    imgs: z.array(z.string()).optional(),
    link: z.string().optional()
  })
})

export const collections = {
  games: gamesCollection,
  team: teamCollection,
  news: newsCollection,
  targi: targiCollection
};