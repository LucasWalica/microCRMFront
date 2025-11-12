export interface User {
  id: number;

  // 🧑‍💼 Datos personales
  name: string;
  surname1: string;
  surname2: string;

  // 📧 Contacto
  email: string;
  phone?: string;

  // 🧩 Roles y permisos
  role: 'owner' | 'client';
  created_by: 'owner' | 'client';

  // 🔐 Autenticación
  email_verified_at?: Date | null;
  token?: string; // útil para cuando Laravel devuelva el token junto al login

  // 🕒 Metadatos
  created_at?: Date;
  updated_at?: Date;
}
