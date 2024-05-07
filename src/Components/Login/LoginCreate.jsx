import React, { createContext, useContext } from "react";
import Header from "../Header";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Footer from "../Footer";
import Error from "../Helper/Error"
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { USER_POST } from "../../Api/api";
import { UserContext } from "../../UserContext";
import Head from "../Helper/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <>
      <Head title="Crie sua conta"/>
      <Header />
      <section className="bgLogin">
        <section className="max-w-[30rem] p-4 mt-40 sm:max-w-full sm:mt-0">
          <h1 className="titleCadastro">Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
            <Input
              label="Usuário"
              typeValue="text"
              name="username"
              {...username}
            />
            <Input label="Email" typeValue="email" name="email" {...email} />
            <Input
              label="Senha"
              typeValue="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Cadastrando...</Button>
            ) : (
              <Button>Cadastrar</Button>
            )}
            <Error error={error}/>
          </form>
        </section>
      </section>
    </>
  );
};

export default LoginCreate;
