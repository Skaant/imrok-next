import CONTENT_TYPES from "../../../_enums/content-types.enum";
import { Link } from "../../Link.type";

type LinksListContent = {
  type: CONTENT_TYPES.LINKS_LIST;
  id: string;
  title: string;
  description?: string;
  links: Link[];
};

export default LinksListContent;
