import React from 'react';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <button type="button">Novo meetup</button>
      </header>

      <ul>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <span>24 de Junho, às 20h</span>
        </Meetup>
        <Meetup>
          <strong>NodeJS Meetup</strong>
          <span>17 de Julho, às 13h</span>
        </Meetup>
        <Meetup>
          <strong>Rocketseat Meetup</strong>
          <span>30 de Agosto, às 20h</span>
        </Meetup>
        <Meetup>
          <strong>React on the house!</strong>
          <span>17 de Novembro, às 16h</span>
        </Meetup>
      </ul>
    </Container>
  );
}
