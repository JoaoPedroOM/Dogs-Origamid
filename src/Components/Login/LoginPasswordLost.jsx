import React from "react";
import Header from "../Header";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Api/api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Footer from "../Footer"

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <>
      <Header />
      <Head title="Perdeu a senha" />
      <section className="bgLogin">
        <section className="animate-left max-w-[30rem] p-4 sm:max-w-full sm:mt-0 mt-[20vh]">
          <h1 className="title">Perdeu a senha ?</h1>
          {data ? (
            <p className="text-[#4b1]">{data}</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
                label="Email / Usuário"
                type="text"
                name="login"
                {...login}
              />
              {loading ? (
                <Button disabled>Enviando...</Button>
              ) : (
                <Button>Enviar Email</Button>
              )}
            </form>
          )}

          <Error error={error} />
        </section>
      </section>
    </>
  );
};

export default LoginPasswordLost;
