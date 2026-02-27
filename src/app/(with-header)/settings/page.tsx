import { PageHeader } from "@/components/ui/PageHeader";
import { DangerZone } from "@/components/settings/DangerZone";
import { SettingToggle } from "@/components/settings/SettingToggle";
import { SettingsSection } from "@/components/settings/SettingsSection";
import { SettingsSidebar } from "@/components/settings/SettingsSidebar";

export const metadata = {
  title: "Configuración",
};

export default function SettingsPage() {
  const currentSettings = {
    appearance: {
      theme: "dark",
      fontSize: "medium" as "small" | "medium" | "large",
      animations: true,
    },
    account: {
      username: "demo",
      email: "lab@example.com",
    },
  };

  return (
    <div className="container-lab py-8">
      <PageHeader
        title="Configuración"
        subtitle="Personaliza tu experiencia en el laboratorio de vulnerabilidades"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <SettingsSection title="Apariencia">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-900/50">
                <label className="block mb-2">
                  <p className="font-medium text-white mb-1">Tamaño de Fuente</p>
                  <p className="text-sm text-slate-400 mb-3">
                    Ajusta el tamaño del texto para mejor legibilidad
                  </p>
                  <select
                    className="input w-full"
                    defaultValue={currentSettings.appearance.fontSize}
                  >
                    <option value="small">Pequeño</option>
                    <option value="medium">Mediano</option>
                    <option value="large">Grande</option>
                  </select>
                </label>
              </div>

              <SettingToggle
                label="Animaciones"
                description="Habilita animaciones y transiciones suaves"
                checked={currentSettings.appearance.animations}
                iconColor="purple"
              />
            </div>
          </SettingsSection>

          <SettingsSection title="Cuenta">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-900/50">
                <p className="font-medium text-white mb-2">
                  Información de Cuenta
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Usuario:</span>
                    <span className="text-slate-300">
                      {currentSettings.account.username}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Email:</span>
                    <span className="text-slate-300">
                      {currentSettings.account.email}
                    </span>
                  </div>
                </div>
                <button className="btn-secondary mt-4 text-sm" type="button">
                  Cambiar Contraseña
                </button>
              </div>

              <DangerZone />
            </div>
          </SettingsSection>

          <SettingsSection title="Datos">
            <div className="space-y-3">
              <p className="text-sm text-slate-400 mb-4">
                Exporta o importa tu progreso y configuración
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="btn-primary flex-1" type="button">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Exportar Datos
                </button>
                <button className="btn-secondary flex-1" type="button">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Importar Datos
                </button>
              </div>
            </div>
          </SettingsSection>
        </div>

        <SettingsSidebar />
      </div>
    </div>
  );
}

