import { CreatePagesArgs } from "gatsby";
import homeRouteFactory from "./src/_routes/home.route";

export default {
  createPages: async ({ graphql, actions }: CreatePagesArgs) => {
    const { createPage } = actions;

    homeRouteFactory("", createPage);

    /* const introCards = await getCardsAtPathQuery(graphql, "_data/cards/intro", [
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
            id: "stripe-highbs-bok",
            title: "Mon livre l'HIGHBS-BOK volume 1 est en vente !",
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
    }); */
    /**
     * CATEGORIES INDEX & PAGES
     
    const categoriesCards = await getCardsAtPathQuery(
      graphql,
      "_data/cards/categories" /* [
      "sort: {fields: frontmatter___id}",
    ]
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
        createPage({
          path: `/categories/${id}`,
          component: require.resolve("./src/_templates/default.template.tsx"),
          context: {
            uptitle: "Catégorie",
            title: name,
            cards: [],
          } as DefaultTemplateContext,
        });
      })
    ); */
  },
};
