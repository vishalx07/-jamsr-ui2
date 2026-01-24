import { Rating as RatingRoot } from "./rating";

export const Rating = Object.assign(RatingRoot, {});

export namespace Rating {
  export interface Props extends RatingRoot.Props {}
}
