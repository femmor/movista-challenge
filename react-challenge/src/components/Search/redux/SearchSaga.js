import { call, put, takeLatest } from "redux-saga/effects"
import types from "../types"
import axios from 'axios'
import { setSearchResults } from "../action"


function* setSearch({ value }) {
  try {
    const apiUrl = 'http://api.giphy.com/v1/gifs/search'
    const api_key = '0s8YhD2rpCePplp27WvsmYEPqV1wYNE0'
    const queryString = value
    const limit = 20
    const result = yield axios(`${apiUrl}`, {
      params: {
        api_key,
        q: queryString,
        limit
      }
    })
    return yield put(setSearchResults(result.data.data))
  } catch (error) {
    console.log(error)
  }
}

function* watchSearch() {
  yield takeLatest(types.watchGetSearchResults, setSearch)
}

export default watchSearch