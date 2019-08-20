import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Container, Button } from './styles';

function Details({ location }) {
  const { meetup } = location.state;

  const { t } = useTranslation();

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <Link
            to={{
              pathname: `/edit/${meetup.id}`,
              state: { meetup },
            }}
          >
            <Button type="button" secondary>
              {t('button.edit')}
            </Button>
          </Link>
          <Link to="/">
            <Button type="button">{t('button.cancel')}</Button>
          </Link>
        </div>
      </header>

      <img src={meetup.banner.url} alt="Banner" />

      <span>{meetup.description}</span>

      <footer>
        <time>{meetup.dateFormatted}</time>

        <address>{meetup.location}</address>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.string,
        banner: PropTypes.shape({
          url: PropTypes.string,
        }),
        dateFormatted: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Details;
