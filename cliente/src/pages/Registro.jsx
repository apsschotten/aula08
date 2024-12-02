import { useState } from "react";
import { useNavigation } from 'react-router-dom';

export default function RegistrarPessoa() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigation();

  const registrar = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch('http://localhost:3000/usuarios', {
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

    return (
      <main>
        <form onSubmit={registrar}>
          <input type="text" id="" value={nome} onChange={(event) => setNome(event.target.value)}>Nome</input>
          <input type="email" id="" value={email} onChange={(event) => setEmail(event.target.value)}>E-mail</input>
          <button>Enviar</button>
        </form>
      </main>
    );
  }
}