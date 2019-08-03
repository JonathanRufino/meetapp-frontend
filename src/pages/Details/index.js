import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

function Details({ location }) {
  const { meetup } = location.state;

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <Button type="button" secondary>
            Editar
          </Button>
          <Link to="/">
            <Button type="button">Cancelar</Button>
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
