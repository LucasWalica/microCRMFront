import { Service } from './services.models';
import { User } from './user.models';



export interface BusinessSchedule {
  [day: string]: {
    open: string;   // Ej: "09:00"
    close: string;  // Ej: "18:00"
    isClosed?: boolean;
  };
}


export interface Business {
  id: number;
  userId: number;
  name: string;
  type?: string;
  coordinates?: string;       // Por ejemplo: "40.4168,-3.7038"
  logo?: string;              // URL del logo
  images?: string[];          // URLs de galería de imágenes
  description?: string;
  schedule?: Record<string, any>; // Ejemplo: { monday: ['09:00-14:00', '16:00-20:00'], ... }
  address?: string;
  aforo?: number;             // Capacidad máxima del negocio
  createdAt?: Date;
  updatedAt?: Date;

  // Relaciones
  owner?: User;
  services?: Service[];
}


