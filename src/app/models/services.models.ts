export interface Service {
  id: number;
  businessId: number;
  name: string;
  description?: string;
  duration: number;   // en minutos
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}