import { ErrorPage } from "@/components/common/ErrorPage";

export const metadata = {
  title: "404 - Página no encontrada",
  description: "La página que buscas no existe o ha sido movida",
};

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-1">
      <ErrorPage
        code="404"
        title="Página no encontrada"
        message="Lo sentimos, la página que estás buscando no existe o ha sido movida. Puede que hayas escrito mal la URL o que la página haya sido eliminada."
        primaryAction={{ text: "Volver al Inicio", href: "/" }}
        secondaryAction={{ text: "Ir al Laboratorio", href: "/hacking" }}
      />
    </div>
  );
}

