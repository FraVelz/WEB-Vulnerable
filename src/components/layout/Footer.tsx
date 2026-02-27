import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6">
      <div className="container-lab">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            Vulnerable Web - Solo para uso educativo
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link
              href="/legal"
              className="hover:text-slate-300 transition-colors"
            >
              Aviso Legal
            </Link>

            <span>•</span>
            <span>Entorno Controlado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

