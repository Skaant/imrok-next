import { RouteFactory } from "../_models/route/route.type";
import { DefaultTemplateContext } from "../_templates/default.template";
import createRoute from "./_createRoute/createRoute";

// export type HomeRouteData = {}

const homeRouteFactory: RouteFactory = (path, createPage) => {
  createRoute<DefaultTemplateContext>(
    path,
    {
      slug: "",
      component: "./src/_templates/default.template.tsx",
      context: {
        title: "Le site créatif de Romaric Ruga",
        cards: [],
      },
    },
    createPage
  );
};

export default homeRouteFactory;
