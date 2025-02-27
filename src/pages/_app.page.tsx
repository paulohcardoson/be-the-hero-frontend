import "@base/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return <div>Erro inesperado</div>;
  }

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
