import React from "react";
import { IoEnterOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import Button from "@base/components/Button";
import Input from "@base/components/Input";
import Head from "next/head";
import { Controller, useForm } from "react-hook-form";
import { IFormInputs } from "./props";

const Login: React.FC = () => {
	const { control, handleSubmit } = useForm<IFormInputs>();

	return (
		<div className="w-screen min-h-screen flex justify-center">
			<Head>
				<title>Be The Hero - Faça login</title>
			</Head>

			<main className="container login-page-container py-10 justify-items-center md:justify-items-start md:justify-between">
				<div className="grid-item-logo md:self-end">
					<Image width={200} height={200} src="/logo.svg" alt="Be The Hero" />
				</div>

				<div className="grid-item-text">
					<h2 className="text-2xl font-semibold">Faça seu logon</h2>
				</div>

				<form
					className="grid-item-form flex flex-col w-full md:pt-10 md:pb-5"
					onSubmit={() => {}}
				>
					<Controller
						control={control}
						name="email"
						render={({ field }) => (
							<Input
								className="mt-5 mb-2.5"
								placeholder="Email"
								{...{ ...field }}
							/>
						)}
					/>

					<Button type="submit" text="Entrar" />
				</form>

				<Link
					href="/register"
					className="grid-item-link mt-5 md:mt-0 flex items-center md:self-start"
				>
					<IoEnterOutline className="text-primary" size={26} />
					<span className="ml-2.5 font-medium transition-opacity hover:opacity-70">
						Não tenho cadastro
					</span>
				</Link>

				<Image
					className="grid-item-banner w-4/5 my-16 md:my-0 md:w-full md:self-center"
					width={500}
					height={500}
					src="/heroes.png"
					alt="Heroes"
				/>
			</main>
		</div>
	);
};

export default Login;
