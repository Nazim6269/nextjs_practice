import { notFound } from "next/navigation";

const Review = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  {
    if (parseInt(params.reviewId) > 100) {
      notFound();
    }
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default Review;
