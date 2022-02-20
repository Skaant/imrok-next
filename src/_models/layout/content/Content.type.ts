import { ReactElement } from "react";
import Row from "../Row.type";
import ImageContent from "./_types/Image.content.type";
import LinksListContent from "./_types/LinksList.content.type";
import ProjectContent from "./_types/Project.content.type";
import VideoContent from "./_types/Video.content.type";

/** Hard-code contents */
export type InternalContent = LinksListContent;
/** Queried content */
export type ExternalContent = ImageContent | VideoContent | ProjectContent;

/**
 * Pages are made of `Content[]`.
 *
 * * *Internal* content *along with `string` and TSX* is
 *   hard-coded in `/src`,
 * * *External* content is queried with graphql from `/_data` (MDX).
 *
 * `Content` will be rendered as `Row`(s), or even `Card`(s).
 *
 *  Thus, **both internal & external contents provide `Row` configuration**.
 *
 * @note Internal/external in the sense of code ?
 */
type Content =
  | string
  | ReactElement
  | Row<InternalContent>
  | Row<ExternalContent>;

export default Content;
