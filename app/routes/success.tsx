import type { LinksFunction } from "@remix-run/node";
import successStyles from '~/styles/success.css';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: successStyles }
  ]
}
export default function SuccessPage() {
  return (
    <div className="container confirmed">
      <div className="confirmed-card">
        <span><h1>¡Pedido Confirmado!</h1></span>

        <div className="mt-10 mx-3">
          <button disabled className="cta sm confirm" >
            Estado del pedido
          </button>
        </div>
      </div>
    </div>
  )
}
