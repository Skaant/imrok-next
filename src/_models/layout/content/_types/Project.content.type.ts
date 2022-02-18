import CONTENT_TYPES from "../../../../_enums/content-types.enum";
import ContentCore from "../Content.core.type";
import Content from "../Content.type";

type ProjectContent = ContentCore & {
  type: CONTENT_TYPES.PROJECT;
  id: string;
  title: string;
  contents?: Content[];
};

export default ProjectContent;
