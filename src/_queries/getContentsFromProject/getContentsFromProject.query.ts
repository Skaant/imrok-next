import { CreatePagesArgs } from "gatsby";
import CONTENT_TYPES from "../../_enums/content-types.enum";
import ExternalContent from "../../_types/content/Content.type";
import { ContentRef } from "../../_types/content/_externalContents/ProjectContent.type";
import getContents, { getContentsRow } from "../getContents/getContents.query";
import GET_CONTENT_FILTERS from "../getContents/_enums/getContentFilters.enum";

/** @todo Should return `Promise<(ContentType & Row)[]>` */
async function getContentsFromProjectRefs(
  graphql: CreatePagesArgs["graphql"],
  refs: ContentRef[]
): Promise<getContentsRow[]> {
  return getContents(graphql, {
    types: CONTENT_TYPES.PROJECT,
    filters: {
      [GET_CONTENT_FILTERS._ID]: refs.map(({ _id }) => _id),
    },
  });
}

export default getContentsFromProjectRefs;
