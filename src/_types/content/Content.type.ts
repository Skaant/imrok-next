import { ReactElement } from "react";
import Row from "../layout/Row.type";
import ExternalContent from "./ExternalContent.type";
import InternalContent from "./InternalContent.type";

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
