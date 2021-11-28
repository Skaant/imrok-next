import CategoriesEnum from "../_enums/categories.enum";

type Category = {
  id: CategoriesEnum;
  name: string;
};

export default Category;

export const categories: Category[] = [
  {
    id: CategoriesEnum.pensees_sur_le_futur,
    name: "Pensées sur le futur",
  },
  {
    id: CategoriesEnum.pensees_abstraites,
    name: "Pensées abstraites",
  },
  {
    id: CategoriesEnum.illustrations_et_art,
    name: "Illustrations et art",
  },
  {
    id: CategoriesEnum.ma_vie,
    name: "Ma vie",
  },
  {
    id: CategoriesEnum.permaculture_et_jardins,
    name: "Permaculture et jardins",
  },
  {
    id: CategoriesEnum.livres_lus_et_extraits,
    name: "Livres lus et extraits",
  },
  {
    id: CategoriesEnum.corps_et_energie,
    name: "Corps et énergie",
  },
];
