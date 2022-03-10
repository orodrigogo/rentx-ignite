interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  },
  fuel_type: string;
  thumbnail: string;
  accessories: {
      type: string;
      name: string;
    }[];

  photos: string[];
}

export { CarDTO }