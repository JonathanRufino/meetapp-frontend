import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

function Details({ location }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { meetup } = location.state;

  const loading = useSelector(state => state.meetup.loading);

  function handleCancel() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

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

          <Button type="button" onClick={handleCancel} disabled={loading}>
            {loading ? t('state.cancelling') : t('button.cancel')}
          </Button>
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
