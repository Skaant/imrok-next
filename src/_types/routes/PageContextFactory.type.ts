import { CreatePagesArgs } from "gatsby";
import { DefaultTemplateContext } from "../../_templates/default.template";

type PageContextFactory<TemplateContext = DefaultTemplateContext> = (
  data: any,
  graphql?: CreatePagesArgs["graphql"]
) => Promise<TemplateContext>;

export default PageContextFactory;
