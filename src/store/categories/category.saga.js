import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fethCategoriesAsync() {
  try {
    const categoriesArray = yield call(
      getCategoriesAndDocuments,
      'categories'
    );
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fethCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getCategoriesAndDocuments(
//         'categories'
//       );
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
