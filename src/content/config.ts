import { defineCollection, z } from 'astro:content';

const projetos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    stack: z.array(z.string()),
    objetivo: z.string(),
    imagens: z.array(z.string()),
    link_projeto: z.string().optional(),
    link_repositorio: z.string().optional(),
    data: z.string(),
    destaque: z.boolean().default(false),
  }),
});

export const collections = {
  projetos,
};
