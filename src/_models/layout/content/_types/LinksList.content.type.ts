import { Link } from "../../../Link.type";

type LinksListContent = {
  id: string;
  title: string;
  description?: string;
  links: Link[];
};

export default LinksListContent;
