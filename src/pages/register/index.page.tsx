import React from "react";
import { IoEnterOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import Button from "@base/components/Button";
import Input from "@base/components/Input";
import Head from "next/head";
import { Controller, useForm } from "react-hook-form";
import { IFormInputs } from "./props";

const Register: React.FC = () => {
	const { control, handleSubmit } = useForm<IFormInputs>();

	return (
		<div className="w-screen min-h-screen flex justify-center">
			<Head>
				<title>Be The Hero - Cadastre sua ONG</title>
			</Head>

			<main className="container register-page-container py-10 justify-items-center md:justify-items-start md:justify-between">
				<div className="grid-item-logo md:self-end">
					<Image width={200} height={200} src="/logo.svg" alt="Be The Hero" />
				</div>

				<div className="grid-item-text text-center mt-8 mb-6 md:text-left">
					<h1 className="text-2xl font-semibold">Cadastre-se</h1>

					<p className="text-black/80">
						Faça seu cadastro, entre na plataforma e ajude pessoas a<br />
						encontrarem os casos da sua ONG.
					</p>
				</div>

				<form
					className="grid-item-form w-full flex flex-col mb-2.5 md:self-center"
					onSubmit={() => {}}
				>
					<Controller
						control={control}
						name="name"
						render={({ field }) => (
							<Input className="mb-2.5" placeholder="Nome" {...{ ...field }} />
						)}
					/>

					<Controller
						control={control}
						name="email"
						render={({ field }) => (
							<Input className="mb-2.5" placeholder="Email" />
						)}
					/>

					<Controller
						control={control}
						name="whatsapp"
						render={({ field }) => (
							<Input className="mb-2.5" placeholder="Whatsapp" />
						)}
					/>

					<div className="grid grid-cols-[60%,39%] justify-between">
						<Controller
							control={control}
							name="city"
							render={({ field }) => (
								<Input className="mb-2.5" placeholder="Cidade" />
							)}
						/>

						<Controller
							control={control}
							name="uf"
							render={({ field }) => (
								<Input className="mb-2.5" placeholder="UF" />
							)}
						/>
					</div>

					<Button type="submit" text="Cadastrar" />
				</form>

				<Link
					href="/"
					className="grid-item-link flex items-center mt-2 md:self-start"
				>
					<IoEnterOutline className="text-primary" size={26} />
					<span className="ml-2.5 font-medium transition-opacity hover:opacity-70">
						Já tenho cadastro
					</span>
				</Link>
			</main>
		</div>
	);
};

export default Register;
