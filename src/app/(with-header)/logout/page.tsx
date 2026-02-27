"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // En una implementación real, aquí se invalidaría la sesión en el servidor.
    router.push("/");
  }, [router]);

  return (
    <div className="container-lab py-16">
      <div className="card p-6 text-center">
        <p className="text-slate-300">Cerrando sesión...</p>
      </div>
    </div>
  );
}

