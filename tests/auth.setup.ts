import { test as setup, expect } from '@playwright/test';
const API_URL = 'http://localhost:4567/api/v3/';

const ADMIN_CRED = {
  user: 'tem',
  pw: '1234test',
};

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
  const response = await request.post(API_URL + 'utilities/login', {
    data: {
      username: ADMIN_CRED.user,
      password: ADMIN_CRED.pw,
    },
  });
  expect(response.status()).toBe(200);

  console.log(response);
  await request.storageState({ path: authFile });
});
