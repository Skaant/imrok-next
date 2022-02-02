import CATEGORIES from "../_enums/categories.enum";
import Category from "../_models/category.model";

export const CATEGORIES_DATA: Category[] = [
  {
    id: CATEGORIES.pensees,
    name: "Pensées",
  },
  {
    id: CATEGORIES.illustrations,
    name: "Illustrations",
  },
  {
    id: CATEGORIES.permaculture,
    name: "Permaculture",
  },
  {
    id: CATEGORIES.anecdotes,
    name: "Anecdotes",
  },
  {
    id: CATEGORIES.bibliotheque,
    name: "Bibliothéque",
  },
];
