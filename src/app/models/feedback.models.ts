import { User } from './user.models';
import { Business } from './business.model';

export interface BusinessFeedback {
  id: number;
  fkBusiness: number;               // ID del negocio
  fkUser: number;                   // ID del usuario que deja la reseña
  title: string;                    // Título del feedback
  description?: string;             // Texto completo de la reseña
  stars: number;                    // Valoración (1-5)
  createdAt?: Date;
  updatedAt?: Date;

  // Relaciones opcionales
  business?: Business;
  user?: User;
}