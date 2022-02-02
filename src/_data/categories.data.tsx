import CATEGORIES from "../_enums/categories.enum";
import Category from "../_models/category.type";

export const CATEGORIES_DATA: { [key in CATEGORIES]: Category } = {
  [CATEGORIES.pensees]: {
    id: CATEGORIES.pensees,
    name: "Pensées",
  },
  [CATEGORIES.illustrations]: {
    id: CATEGORIES.illustrations,
    name: "Illustrations",
  },
  [CATEGORIES.permaculture]: {
    id: CATEGORIES.permaculture,
    name: "Permaculture",
  },
  [CATEGORIES.anecdotes]: {
    id: CATEGORIES.anecdotes,
    name: "Anecdotes",
  },
  [CATEGORIES.bibliotheque]: {
    id: CATEGORIES.bibliotheque,
    name: "Bibliothéque",
  },
};
