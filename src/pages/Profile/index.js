import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

const PROFILE_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Informe seu nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Informe seu endereço de e-mail'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .required('Informe sua nova senha')
          .min(6, 'No mínimo 6 caracteres')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirme sua nova senha')
          .oneOf([Yup.ref('password')], 'As senhas não conferem')
      : field
  ),
});

function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form
        schema={PROFILE_SCHEMA}
        initialData={profile}
        onSubmit={handleSubmit}
      >
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Endereço de e-mail" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Salvar perfil</button>
      </Form>
    </Container>
  );
}

export default Profile;
