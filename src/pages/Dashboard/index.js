import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import api from '~/services/api';

import { Container, Meetup } from './styles';

function Dashboard() {
  const { t } = useTranslation();

  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(parseISO(meetup.date), "d 'de' MMMM', às' H'h'", {
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
        <h1>{t('header.myMeetups')}</h1>

        <Link to="/new">
          <button type="button">{t('button.newMeetup')}</button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Link
            key={meetup.id}
            to={{
              pathname: `/meetup/${meetup.id}`,
              state: { meetup },
            }}
          >
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

export default Dashboard;
