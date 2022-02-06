import CATEGORIES from "../_enums/categories.enum";
import Category from "../_models/category.type";

export const CATEGORIES_DATA: { [key in CATEGORIES]: Category } = {
  [CATEGORIES.pensees]: {
    id: CATEGORIES.pensees,
    title: "Pensées",
  },
  [CATEGORIES.illustrations]: {
    id: CATEGORIES.illustrations,
    title: "Illustrations",
  },
  [CATEGORIES.permaculture]: {
    id: CATEGORIES.permaculture,
    title: "Permaculture",
  },
  [CATEGORIES.anecdotes]: {
    id: CATEGORIES.anecdotes,
    title: "Anecdotes",
  },
  [CATEGORIES.bibliotheque]: {
    id: CATEGORIES.bibliotheque,
    title: "Bibliothéque",
  },
};
