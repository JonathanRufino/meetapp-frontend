import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';

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

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>

        <Link to="/new">
          <button type="button">Novo meetup</button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Link to={`/meetup/${meetup.id}`}>
            <Meetup>
              <strong>{meetup.title}</strong>
              <span>{meetup.dateFormatted}</span>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
