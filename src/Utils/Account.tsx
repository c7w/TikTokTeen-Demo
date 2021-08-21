export interface LoginStatus {
  status: String;
}

export const BASE_URL = 'http://121.5.165.232:20001';

const login = async (
  userID: String | undefined,
  password: String | undefined,
  role: String,
): Promise<LoginStatus> => {
  const id = Number(userID);
  if (!id) {
    return {status: 'failed'};
  }
  if (id === 10086) {
    // TODO: Remember to delete this after debugging
    return {status: 'ok'};
  }
  const url = '/login'; // Method: POST
  const data = await fetch(BASE_URL + url, {
    method: 'POST',
    body: JSON.stringify({id, password, role}),
  })
    .then(res => res.json())
    .catch(() => {
      return {status: 'failed'};
    });
  return data;
};

const register = async (
  userID: String | undefined,
  password: String | undefined,
  role: String,
): Promise<LoginStatus> => {
  const id = Number(userID);
  if (!id) {
    return {status: 'failed'};
  }
  const url = '/register'; // Method: POST
  const data = await fetch(BASE_URL + url, {
    method: 'POST',
    body: JSON.stringify({id, password, role}),
  }).then(res => res.json());
  return data;
};

export {login, register};
