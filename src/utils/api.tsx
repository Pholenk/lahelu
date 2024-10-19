type API_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

const BASE_URL = 'https://lahelu.com';
const API_VERSION = '/api';

export async function API<T>(
  method: API_METHOD,
  uri: string,
  params?: Record<string, string | number>,
  payload?: Record<string, string | number>,
) {
  const result = {
    code: 0,
    message: '',
    response: {} as T,
  };
  let requestParams = typeof params === 'undefined' ? {} : params;
  let requestPayload = typeof payload === 'undefined' ? {} : payload;

  try {
    let url = `${BASE_URL}${API_VERSION}${encodeURI(uri)}`;
    const fetchRequest = {
      method,
      body: JSON.stringify(requestPayload) || undefined,
    };

    if (method === 'GET') {
      const paramKeys = Object.keys(requestParams);
      const queryParams = [];
      for (let i = 0; i < paramKeys.length; i++) {
        queryParams.push(`${paramKeys[i]}=${requestParams[paramKeys[i]]}`);
        url += encodeURI(`?${queryParams.join('&')}`);
      }

      delete fetchRequest.body;
    }

    const response = await fetch(url, fetchRequest);
    result.code = response.status;

    if (response.status < 200 || response.status > 300) {
      throw new Error(response.statusText);
    }

    const jsonResponse = await response.json();
    result.response = jsonResponse;
  } catch (e) {
    result.message = JSON.stringify(e);
  }

  return result;
}
