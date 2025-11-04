import { User } from "./user.models";
import { Business } from "./business.model";
import { Service } from "./services.models";

export interface Reservation {
  id: number;
  fkUserClient: number;             // ID del cliente (user_id)
  fkBusinessService: number;        // ID del servicio reservado
  timeStart: Date;                  // Fecha/hora de inicio
  estimatedTimeEnd?: Date;          // Fecha/hora de finalización estimada
  status: ReservationStatus;        // Estado de la reserva
  aforo?: number;                   // Capacidad (si aplica)
  createdAt?: Date;
  updatedAt?: Date;

  // Relaciones opcionales (si las traes con el backend)
  client?: User;
  service?: Service;
  business?: Business;
}

// 🎯 Estados posibles de la reserva
export type ReservationStatus =
  | 'pending'      // pendiente de confirmar
  | 'confirmed'    // confirmada
  | 'cancelled'    // cancelada
  | 'completed';   // ya realizada