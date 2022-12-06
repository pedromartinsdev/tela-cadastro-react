import React from "react";
import { FormContainer } from "./styles";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import user from "../../assets/user.png";

function Form() {
  return (
    <FormContainer>
      <h1>Comece agora grátis</h1>
      <p>Crie sua conta e make the change._</p>
      <form>
        <fieldset>
          <label>
            <img src={user} alt=""></img>
          </label>
          <input type="text" name="name" placeholder="Nome completo"></input>
        </fieldset>
        <fieldset>
          <label>
            <img src={email} alt=""></img>
          </label>
          <input type="text" name="email" placeholder="E-mail"></input>
        </fieldset>
        <fieldset>
          <label>
            <img src={password} alt=""></img>
          </label>
          <input type="text" name="password" placeholder="Password"></input>
        </fieldset>
      </form>
      <button type="button">Criar minha conta</button>
      <p>
        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas
        de Privacidade e os Termos de Uso da DIO.
      </p>
      <p className="account">
        Já tenho conta. <span>Fazer login</span>
      </p>
    </FormContainer>
  );
}

export default Form;
