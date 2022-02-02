import RouteFactory from "../_models/routes/route-factory.type";

const homeRouteFactory: RouteFactory = (path, createPage) => {
  createPage({
    path,
    component: "./src/_templates/default.template.tsx",
    context: {
      title: "Le site créatif de Romaric Ruga",
    },
  });
};

export default homeRouteFactory;
