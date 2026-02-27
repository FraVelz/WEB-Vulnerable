import { AdminHeader } from "@/components/admin/AdminHeader";
import { InfoCard } from "@/components/common/InfoCard";
import { StatCard } from "@/components/ui/StatCard";
import { UsersTable } from "@/components/users/UsersTable";
import { USERS } from "@/lib/data/users";

export const metadata = {
  title: "Panel de Administración - Usuarios",
};

export default function UsersPage() {
  const totalUsers = USERS.length;
  const activeUsers = USERS.filter((u) => u.status === "active").length;
  const suspendedUsers = USERS.filter((u) => u.status === "suspended").length;
  const totalPoints = USERS.reduce((sum, u) => sum + u.points, 0);

  return (
    <div className="container-lab py-8">
      <AdminHeader />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard value={totalUsers} label="Total Usuarios" color="gradient" />
        <StatCard value={activeUsers} label="Activos" color="green" />
        <StatCard value={suspendedUsers} label="Suspendidos" color="red" />
        <StatCard value={totalPoints} label="Puntos Totales" color="primary" />
      </div>

      <UsersTable users={USERS} />

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <InfoCard title="Información del Sistema">
          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex justify-between">
              <span>Versión del Sistema:</span>
              <span className="text-white">v1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>Última Actualización:</span>
              <span className="text-white">2026-01-20</span>
            </div>
            <div className="flex justify-between">
              <span>Registros Auditados:</span>
              <span className="text-white">1,247</span>
            </div>
            <div className="flex justify-between">
              <span>Accesos Hoy:</span>
              <span className="text-green-400">42</span>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Actividad Reciente">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span>admin inició sesión - hace 2 horas</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Nuevo usuario registrado - hace 5 horas</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Usuario suspendido - hace 1 día</span>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}

