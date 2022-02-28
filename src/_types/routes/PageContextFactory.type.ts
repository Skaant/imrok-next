import { DefaultTemplateContext } from "../../_templates/default.template";

type PageContextFactory<TemplateContext = DefaultTemplateContext> = (
  data: any
) => TemplateContext;

export default PageContextFactory;
