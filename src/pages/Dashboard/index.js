import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      console.tron.log(response);

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(meetup.date, 'D [de] MMMM[, às] H[h]', {
          locale: pt,
        }),
      }));
      // 24 de Junho, às 20h

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <button type="button">Novo meetup</button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup>
            <strong>{meetup.title}</strong>
            <span>{meetup.dateFormatted}</span>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
