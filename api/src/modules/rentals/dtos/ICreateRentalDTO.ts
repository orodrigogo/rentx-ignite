interface ICreateRentalDTO {
  user_id: string;
  car_id: string;  
  start_date: string;
  end_date: string;
  total: number; 
}

export { ICreateRentalDTO };
