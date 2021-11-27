import CategoriesEnum from "../_enums/categories.enum";

type Category = {
  id: CategoriesEnum;
  label: string;
};

export default Category;

export const categories: Category[] = [
  {
    id: CategoriesEnum.pensees_sur_le_futur,
    label: "Pensées sur le futur",
  },
  {
    id: CategoriesEnum.pensees_abstraites,
    label: "Pensées abstraites",
  },
  {
    id: CategoriesEnum.illustrations_et_art,
    label: "Illustrations et art",
  },
  {
    id: CategoriesEnum.ma_vie,
    label: "Ma vie",
  },
  {
    id: CategoriesEnum.permaculture_et_jardins,
    label: "Permaculture et jardins",
  },
  {
    id: CategoriesEnum.livres_lus_et_extraits,
    label: "Livres lus et extraits",
  },
  {
    id: CategoriesEnum.corps_et_energie,
    label: "Corps et énergie",
  },
];
