import SpecialCardsEnum from "../_enums/special-cards.enum";

type SpecialCard = {
  type: SpecialCardsEnum;
  id: string;
  title?: string;
  description?: string;
  props: any;
};

export default SpecialCard;
