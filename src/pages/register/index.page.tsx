import React from "react";
import { IoEnterOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import Button from "@base/components/Button";
import Input from "@base/components/Input";
import Head from "next/head";

const Register: React.FC = () => {
  // const history = useHistory();

  // async function handleRegister(e) {
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
        <title>Be The Hero</title>
      </Head>

      {/* <main className="container register-page-container justify-items-center items-center md:justify-items-start md:justify-between"> */}
      <main className="container register-page-container self-center justify-items-center md:justify-items-start md:justify-between md:items-center">
        <div className="logo">
          <Image width={250} height={200} src="/logo.svg" alt="Be The Hero" />
        </div>

        <div className="text text-center mt-8 mb-6 md:text-left">
          <h1 className="text-2xl font-semibold">Cadastre-se</h1>

          <p className="text-black/80">
            Faça seu cadastro, entre na plataforma e ajude pessoas a<br />
            encontrarem os casos da sua ONG.
          </p>
        </div>

        <form
          className="form flex flex-col w-3/4 mb-2.5 md:w-full"
          onSubmit={() => {}}
        >
          <Input className="mb-2.5" placeholder="Nome" />
          <Input className="mb-2.5" placeholder="Email" />
          <Input className="mb-2.5" placeholder="Whatsapp" />

          <div className="grid grid-cols-[60%,1fr] gap-2">
            <Input className="mb-2.5" placeholder="Cidade" />
            <Input className="mb-2.5" placeholder="UF" />
          </div>

          <Button type="submit" text="Cadastrar" />
        </form>

        <div className="link">
          <Link href="/" className="mt-2 flex items-center">
            <IoEnterOutline className="text-primary" size={26} />
            <span className="ml-2.5 font-medium transition-opacity hover:opacity-80">
              Já tenho cadastro
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};
export default Register;
