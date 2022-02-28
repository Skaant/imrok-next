import CATEGORIES from "../../../_enums/categories.enum";
import CONTENT_TYPES from "../../../_enums/content-types.enum";
import { Link } from "../../Link.type";
import ContentCore from "../ContentCore.type";

type LinksListContent = ContentCore & {
  type: CONTENT_TYPES.LINKS_LIST;
  id: string;
  title: string;
  description?: string;
  links: (Link & {
    date?: string;
    category?: CATEGORIES;
    tags?: string[];
    type?: CONTENT_TYPES;
  })[];
};

export default LinksListContent;
