import { CreatePagesArgs } from "gatsby";
import { CallToActionCardProps } from "./src/_components/specialCards/CallToAction";
import { LinksListCardProps } from "./src/_components/specialCards/LinksList";
import { TagsCloudCardProps } from "./src/_components/specialCards/TagsCloud";
import SpecialCardsEnum from "./src/_enums/special-cards.enum";
import { categories } from "./src/_models/category.model";
import getCardsAtPathQuery from "./src/_queries/getCardsAtPath.query";
import getCardsWithTag from "./src/_queries/getCardsWithTag.query";
import getProjectsAtPathQuery from "./src/_queries/getProjectsAtPath.query";
import getTagsQuery from "./src/_queries/getTags.query";
import { DefaultTemplateContext } from "./src/_templates/default.template";

/* exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const { slug } = node.frontmatter;
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
}; */

export default {
  createPages: async ({ graphql, actions }: CreatePagesArgs) => {
    const { createPage } = actions;
    const introCards = await getCardsAtPathQuery(graphql, "_data/cards/intro", [
      "sort: {fields: frontmatter___id}",
    ]);
    const tags = await getTagsQuery(graphql);
    createPage({
      path: "/",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        title: "Le site créatif de Romaric Ruga",
        cards: [
          introCards[0],
          {
            type: SpecialCardsEnum.call_to_action,
            id: "ulule-highbs-bok",
            title: "Les préventes de mon livre l'HIGHBS-BOK sont ouvertes",
            description:
              "Vous n'avez que **jusqu'au 26 Décembre** pour **vous procurer un exemplaire** de ce formidable ouvrage, **accompagné de supers stickers** spécialement créés pour l'occasion.",
            url: "https://fr.ulule.com/highbs-bok-volume-1/",
          } as CallToActionCardProps,
          introCards[1],
          {
            type: SpecialCardsEnum.links_list,
            id: "arborescence-du-site",
            title: "Arborescence du site",
            description:
              "Ci-dessous, découvrez la liste des grandes catégories du site.",
            links: categories.map(({ id, name }) => ({
              url: `/categories/${id}`,
              label: name,
            })),
          } as LinksListCardProps,
        ],
      } as DefaultTemplateContext,
    });
    /**
     * CATEGORIES INDEX & PAGES
     */
    const categoriesCards = await getCardsAtPathQuery(
      graphql,
      "_data/cards/categories" /* [
      "sort: {fields: frontmatter___id}",
    ] */
    );
    createPage({
      path: "/categories",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        title: "Catégories du site",
        cards: [categoriesCards[0]],
      } as DefaultTemplateContext,
    });
    await Promise.all(
      categories.map(async ({ id, name }) => {
        /* const categoriesCards = await getCardsWithTag(graphql, id, [
          "sort: {fields: frontmatter___id}",
        ]); */
        createPage({
          path: `/categories/${id}`,
          component: require.resolve("./src/_templates/default.template.tsx"),
          context: {
            uptitle: "Catégorie",
            title: name,
            cards: [] /* categoriesCards */,
          } as DefaultTemplateContext,
        });
      })
    );
    /**
     * TAGS INDEX & PAGES
     */
    const tagsCards = await getCardsAtPathQuery(
      graphql,
      "_data/cards/tags" /* [
      "sort: {fields: frontmatter___id}",
    ] */
    );
    createPage({
      path: "/tags",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        title: "Mots-clés",
        cards: [
          tagsCards[0],
          {
            type: "tags_cloud",
            id: "tags_cloud",
            title: "Répertoire des mots-clés",
            description:
              "Voici une liste exhaustive de **tous les mots-clés du site**.",
            tags,
          } as TagsCloudCardProps,
        ],
      } as DefaultTemplateContext,
    });
    await Promise.all(
      tags.map(async (tag) => {
        const tagCards = await getCardsWithTag(graphql, tag, [
          "sort: {fields: frontmatter___id}",
        ]);
        createPage({
          path: `/tags/${tag}`,
          component: require.resolve("./src/_templates/default.template.tsx"),
          context: {
            uptitle: "Mot-clé",
            title: tag,
            cards: tagCards,
          } as DefaultTemplateContext,
        });
      })
    );
    /**
     * PROJECTS INDEX & PAGES
     */
    const projectsCards = await getCardsAtPathQuery(
      graphql,
      "_data/cards/projects" /* [
      "sort: {fields: frontmatter___id}",
    ] */
    );
    const projects = await await getProjectsAtPathQuery(
      graphql,
      "_data/projects/_index" /* [
      "sort: {fields: frontmatter___id}",
    ] */
    );
    createPage({
      path: "/projets",
      component: require.resolve("./src/_templates/default.template.tsx"),
      context: {
        title: "Mes différents projets",
        cards: [
          projectsCards[0],
          {
            type: SpecialCardsEnum.links_list,
            id: "liste-des-projets",
            title: "Liste des projets",
            description:
              "Pour le moment, tous les projets sont posés pêle-mêle ici.",
            links: projects.map(({ frontmatter }) => {
              console.log(frontmatter);
              return {
                url: `/projets/${frontmatter.id}`,
                label: frontmatter.title,
              };
            }),
          } as LinksListCardProps,
        ],
      } as DefaultTemplateContext,
    });
    await Promise.all(
      projects.map(async (project) => {
        /* const projectCards = await getCardsWithTag(graphql, project, [
          "sort: {fields: frontmatter___id}",
        ]); */
        createPage({
          path: `/projets/${project.frontmatter.id}`,
          component: require.resolve("./src/_templates/default.template.tsx"),
          context: {
            uptitle: "Projet",
            title: project.frontmatter.title,
            cards: [project] /* tagCards */,
          } as DefaultTemplateContext,
        });
      })
    );
  },
};
