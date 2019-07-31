import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

export default function Details() {
  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>

        <div>
          <Button type="button" secondary>
            Editar
          </Button>
          <Link to="/">
            <Button type="button">Cancelar</Button>
          </Link>
        </div>
      </header>

      <img
        src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
        alt="Banner"
      />

      <span>
        O Meetup de React Native é um evento que reúne a comunidade de
        desenvolvimento mobile utilizando React a fim de compartilhar
        conhecimento. Todos são convidados. Caso queira participar como
        palestrante do meetup envie um e-mail para organizacao@meetuprn.com.br.
      </span>

      <footer>
        <time>24 de Junho, às 20h</time>

        <address>Rua Guilherme Gembala, 260</address>
      </footer>
    </Container>
  );
}
