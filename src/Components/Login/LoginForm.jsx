import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading, login } = useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animate-left max-w-[30rem] p-4 mt-40 sm:max-w-full sm:mt-0">
      <Head title="Login"/>
      <h1 className="title">Login</h1>
      <form className="mb-8" onSubmit={handleSubmit}>
        <Input label="Usuário" typeValue="text" name="username" {...username} />
        <Input
          label="Senha"
          typeValue="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className="inline-block text-[#666] py-2 leading-4 after:content-[''] after:h-[2px] after:w-full after:bg-[#666] after:block" to="/login/perdeu">Perdeu a senha ?</Link>
      <div className="mt-16">
        <h2 className="font-main text-[2rem] leading-[1] font-bold text-custom-black after:content-[''] after:block after:bg-[#ddd] after:h-2 after:w-[3rem] after:rounded">Cadastre-se</h2>
        <p className="my-8">Ainda não possui conta ? Cadastre-se no site.</p>
        <Link className="text-base cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] py-[0.8rem] px-[1.2rem] button-details min-w-32" to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
