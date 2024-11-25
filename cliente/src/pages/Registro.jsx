import { useState } from "react";

export default function Registrar() {
  event.preventDefault();
  try {
    await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    });
  } catch {
    alert("Ocorreu um erro.");
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <main>
      <form onSubmit={Registrar}>
        <imput value={nome}>Nome</imput>
        <imput value={email}>E-mail</imput>
        <button>Enviar</button>
      </form>
    </main>
  );
}
