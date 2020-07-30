export interface City {
  name: string,
  coords: [number, number],
  zoom: number
};

export interface Offer {
  id: number,
  title: string,
  price: number,
  raiting: number,
  type: string,
  isInBookmark: boolean,
  isPremium: boolean,
  coords: [number, number],
  description: string,
  bedrooms: number,
  quests: {adults: number, kids: number},
  items:string[],
  host: {
    avatar: string,
    name: string,
    isSuper: boolean,
  },
  photos: string[],
  city: City
}

export interface Review {
    comment: string,
    user: {
      name: string,
      avatarUrl: string,
      rating: number
    },
    rating: number,
    date: string,
    id: number
}
