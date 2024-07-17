export type SendReviewFormDataType = {
  text: string;
  rating: number;
};

export type SendReviewType = SendReviewFormDataType & {
  offerId: string;
  date: string;
};
