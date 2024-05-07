import React, { useEffect, useState } from "react";
import Header from "../Header";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../Api/api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";
import Footer from "../Footer";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState();
  const [key, setKey] = useState();
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <>
      <Header />
      <Head title="Resete a senha" />
      <section className="bgLogin">
        <section className="animate-left max-w-[30rem] p-4 sm:max-w-full sm:mt-0">
          <h1 className="title">Resete a Senha</h1>
          <form onSubmit={handleSubmit}>
            <Input
              label="Nova senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Resetando...</Button>
            ) : (
              <Button>Resetar</Button>
            )}
          </form>
          <Error error={error} />
        </section>
      </section>
    </>
  );
};

export default LoginPasswordReset;
