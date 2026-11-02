import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">404</h1>
      <p className="text-text-muted">Cette page n'existe pas.</p>
      <Link to="/" className="text-primary hover:underline">
        ← Retour à l'accueil
      </Link>
    </div>
  )
}

export default NotFound
