export type ProfileRole = "student" | "instructor" | "admin";

export type ProfileUser = {
  id: number;
  username: string;
  email: string;
  role: ProfileRole;
  joinedAt: string;
  lastLogin: string;
  flag: string;
};

export const PROFILE_USERS: Record<number, ProfileUser> = {
  1: {
    id: 1,
    username: "demo",
    email: "lab@example.com",
    role: "student",
    joinedAt: "2026-01-15",
    lastLogin: "2026-02-20 12:15:00",
    flag: "FLAG{idor_perfil}",
  },
  2: {
    id: 2,
    username: "admin",
    email: "admin@vulnerableweb.local",
    role: "admin",
    joinedAt: "2025-12-01",
    lastLogin: "2026-02-22 14:30:00",
    flag: "FLAG{admin_profile_leak}",
  },
  3: {
    id: 3,
    username: "student_01",
    email: "student01@example.com",
    role: "student",
    joinedAt: "2026-01-10",
    lastLogin: "2026-02-21 18:45:00",
    flag: "FLAG{predictable_profile_resource}",
  },
};

export type ProfileNote = {
  title: string;
  content: string;
};

export const PROFILE_NOTES: Record<number, ProfileNote> = {
  1: {
    title: "Checklist de pruebas",
    content:
      "Recordar validar entrada en servidor.\n\nNota privada (superficie educativa).",
  },
  2: {
    title: "Credenciales temporales",
    content:
      "Usuario: demo\nClave: demo123\n\n(No usar fuera del laboratorio.)",
  },
  3: {
    title: "Token interno",
    content: "internalToken=FLAG{note_idor_exposed}",
  },
};

