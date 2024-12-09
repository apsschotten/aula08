import { useState } from "react";
import { Button } from '@mui/material';

export default function RegistrarPessoa() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const registrar = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          nome: nome,
          email: email
        })
      })
      alert("Registrado com sucesso!")
    }
    catch {
      alert("Ocorreu um erro na aplicação.")
    }
  }

  return (
    <div>
      <form onSubmit={registrar}>
        <input type="text" name="Nome" id="" value={nome} onChange={(event) => setNome(event.target.value)} />
        <input type="email" name="E-mail" id="" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button>Registrar</button>
      </form>
    </div>
  );
}