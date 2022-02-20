import { ReactElement } from "react";
import ImageContent from "./_types/Image.content.type";
import LinksListContent from "./_types/LinksList.content.type";
import ProjectContent from "./_types/Project.content.type";
import VideoContent from "./_types/Video.content.type";

/** Hard-code contents */
export type InternalContent = string | ReactElement | LinksListContent;
/** Queried content */
export type ExternalContent = ImageContent | VideoContent | ProjectContent;

/**
 * Pages are made of `Content[]`.
 *
 * * *Internal* content is hard-coded in `/src` (`string`, TSX),
 * * *External* content is queried with graphql from `/_data` (MDX).
 *
 * `Content` will be rendered as `Row`(s), or even `Card`(s).
 *  *Thus,* external content *could provide optional
 *  component configuration.*
 *
 * @note Internal/external in the sense of code ?
 */
type Content = InternalContent | ExternalContent;

export default Content;
