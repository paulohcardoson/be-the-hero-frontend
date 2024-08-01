import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { FiArrowLeft } from "react-icons/fi";

// import api from "../../services/api";

// import cookie from "../../services/cookieController";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFormInputs } from "./props";
import Input from "@components/Input";
import TextArea from "@base/components/TextArea";
import Button from "@base/components/Button";
import Head from "next/head";

const NewIncident: React.FC = () => {
	const { control, handleSubmit } = useForm<IFormInputs>({
		defaultValues: {
			title: "",
			description: "",
			value: "",
		},
	});

	const router = useRouter();

	async function handleNewIncident() {
		try {
			//await api.post("/incidents", data);

			router.push("/profile");
		} catch (err) {
			console.log(err);
			alert("Erro no cadastro, tente novamente");
		}
	}

	const onSubmit: SubmitHandler<IFormInputs> = () => {};

	return (
		<div className="w-screen min-h-screen flex justify-center">
			<Head>
				<title>Be The Hero - Novo incidente</title>
			</Head>

			<main className="container new-incident-page-container py-10 justify-items-center md:justify-items-start md:justify-between">
				<Image
					className="grid-item-logo md:self-end"
					src="/logo.svg"
					alt="Be The Hero"
					width={200}
					height={200}
				/>

				<div className="grid-item-text text-center mt-8 mb-6 md:text-left">
					<h2 className="text-2xl font-semibold md:pb-2.5">
						Cadastrar novo caso
					</h2>
					<p className="opacity-75">
						Descreva o caso detalhadamente para encontrar um herói para resolver
						isso.
					</p>
				</div>

				<Link
					href="/"
					className="grid-item-link flex items-center mt-2 md:self-start"
				>
					<FiArrowLeft size={16} color="#e02041" />
					<span className="ml-2.5 font-medium transition-opacity hover:opacity-70">
						Voltar para home
					</span>
				</Link>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid-item-form w-full flex flex-col mb-2.5 md:self-center"
				>
					<div className="flex flex-col gap-2">
						<Controller
							control={control}
							name="title"
							render={({ field }) => (
								<Input
									placeholder="Título do caso"
									{...{ ...field, ref: null }}
								/>
							)}
						/>

						<Controller
							control={control}
							name="description"
							render={({ field }) => (
								<TextArea
									placeholder="Descrição"
									className="h-36"
									{...{ ...field, ref: null }}
								/>
							)}
						/>

						<div className="flex items-center bg-white h-12 rounded-md border-solid border-2 border-gray-200 focus-within:border-primary transition-colors overflow-hidden">
							<span className="font-semibold text-primary pl-2.5">R$</span>

							<Controller
								control={control}
								name="value"
								render={({ field: { ref, onChange, ...field } }) => (
									<CurrencyInput
										className={`font-inter font-medium w-full h-full px-2.5`}
										placeholder="Valor"
										onValueChange={(value) => onChange(value)}
										disableAbbreviations
										decimalSeparator=","
										groupSeparator="."
										{...{ ...field }}
									/>
								)}
							/>
						</div>

						<Button text="Cadastrar" />
					</div>
				</form>
			</main>
		</div>
	);
};

export default NewIncident;
