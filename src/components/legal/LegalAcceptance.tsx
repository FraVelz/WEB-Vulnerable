import Link from "next/link";

export function LegalAcceptance() {
  return (
    <section className="card p-6 bg-lab-primary-500/5 border-lab-primary-500/20">
      <h2 className="text-xl font-semibold text-white mb-4">
        7. Aceptación de Términos
      </h2>
      <p className="text-slate-400 mb-6">
        Al acceder y utilizar Vulnerable Web, confirmas que has leído, entendido
        y aceptas cumplir con todos los términos y condiciones establecidos en
        este aviso legal.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/login" className="btn-primary">
          Acepto los términos - Acceder
        </Link>
        <Link href="/" className="btn-secondary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

