import React from "react";
import { IoEnterOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import Button from "@base/components/Button";
import Input from "@base/components/Input";
import Head from "next/head";

const Login: React.FC = () => {
  // const history = useHistory();

  // async function handleLogin(e) {
  //   e.preventDefault();

  //   try {
  //     await api.post("/", { id });

  //     //Inserir cookie
  //     cookie.set("id", id);

  //     //Mudar de página
  //     history.push("/profile");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className="w-screen h-screen flex justify-center">
      <Head>
        <title>Be The Hero - Cadastre sua ONG</title>
      </Head>

      <main className="container login-page-container self-center justify-items-center md:justify-items-start md:justify-between">
        <div className="logo md:self-end">
          <Image width={200} height={200} src="/logo.svg" alt="Be The Hero" />
        </div>

        <form
          className="form flex flex-col w-full md:py-10"
          onSubmit={() => {}}
        >
          <h1 className="text-2xl font-semibold">Faça seu logon</h1>

          <Input className="mt-5 mb-2.5" placeholder="Sua ID" />

          <Button type="submit" text="Entrar" />
        </form>

        <Link
          href="/register"
          className="link mt-5 md:mt-0 flex items-center md:self-start"
        >
          <IoEnterOutline className="text-primary" size={26} />
          <span className="ml-2.5 font-medium transition-opacity hover:opacity-80">
            Não tenho cadastro
          </span>
        </Link>

        <div className="banner w-1/2 py-16 md:w-full md:self-start">
          <Image width={500} height={500} src="/heroes.png" alt="Heroes" />
        </div>
      </main>
    </div>
  );
};
export default Login;
