export const adapterOffer = (offer) => {
  return {
    id: offer.id,
    city: {
      name: offer.city.name,
      coords: [offer.city.location.latitude, offer.city.location.longitude],
      zoom: offer.city.location.zoom
    },
    title: offer.title,
    description: offer.description,
    price: offer.price,
    raiting: offer.rating,
    bedrooms: offer.bedrooms,
    quests: {
      adults: offer.max_adults,
      kids: 0
    },
    items: offer.goods,
    type: `apartment`,
    isInBookmark: offer.is_favorite,
    isPremium: offer.is_premium,
    photos: offer.images,
    host: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isSuper: offer.host.is_pro,
    },
    coords: [offer.location.latitude, offer.location.longitude],
  };
};

