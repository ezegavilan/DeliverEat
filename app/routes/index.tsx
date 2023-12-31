import { redirect, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "¿Que estás buscando? | Comercio 1",
  };
};

export const loader: LoaderFunction = () => {
  return redirect('/checkout');
}

export default function Index() {
  return (
    <main>
      <Link to="checkout">
        <button>Ver pedido</button>
      </Link>
    </main>
  );
}
