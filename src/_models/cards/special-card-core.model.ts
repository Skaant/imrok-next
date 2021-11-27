import SpecialCardsEnum from "../../_enums/special-cards.enum";

type SpecialCardCore = {
  type: SpecialCardsEnum;
  id: string;
  title?: string;
  description?: string;
};

export default SpecialCardCore;
