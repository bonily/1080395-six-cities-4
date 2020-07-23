export const adapterReview = (review) => {
  return {
    user: {
      name: review.user.name,
      avatarUrl: review.user.avatar_url,
      rating: review.user.rating
    },
    rating: review.rating,
    comment: review.comment,
    date: review.date,
    id: 1,
  };
};
