import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from './styles';

const MEETUP_SCHEMA = Yup.object().shape({
  banner_id: Yup.number().required(),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  location: Yup.string().required(
    'Insira o local onde será realizado o meetup'
  ),
  date: Yup.date('Insira uma data válida').required(
    'Insira a data em que o meetup acontecerá'
  ),
});

export default function New() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.meetup.loading);

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={MEETUP_SCHEMA} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          multiline
          rows="4"
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" type="" placeholder="Localização" />

        <button type="submit">
          {loading ? 'Salvando...' : 'Salvar meetup'}
        </button>
      </Form>
    </Container>
  );
}
