import { CallToActionCardProps } from "../../_components/specialCards/CallToAction";
import { LinksListCardProps } from "../../_components/specialCards/LinksList";
import { TagsCloudCardProps } from "../../_components/specialCards/TagsCloud";

type SpecialCard =
  | TagsCloudCardProps
  | CallToActionCardProps
  | LinksListCardProps;

export default SpecialCard;
