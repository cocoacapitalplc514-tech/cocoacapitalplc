import type { Rating } from "./types";
import { fromCms } from "./cms";

/** Credit ratings — empty until officially published. */
export const LOCAL_RATINGS: Rating[] = [];

export const RATINGS: Rating[] = fromCms("ratings", LOCAL_RATINGS);
