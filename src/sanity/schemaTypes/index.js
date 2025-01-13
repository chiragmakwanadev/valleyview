import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { assistantType } from "./assistantType";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, assistantType],
};
