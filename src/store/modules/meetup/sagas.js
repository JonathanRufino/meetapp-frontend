import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  createMeetupSuccess,
  createMeetupFailure,
} from '~/store/modules/meetup/actions';

export function* createMeetup({ payload }) {
  try {
    const response = yield call(api.post, 'meetups', payload.data);

    toast.success('Meetup criado com sucesso');

    yield put(createMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados informados');

    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
