import { test, expect } from '@playwright/test';
const API_URL = 'http://localhost:4567/api/v3/';

const ADMIN_CRED = {
  user: 'tem',
  pw: '1234test',
};
test('login-setup canary test', async ({ page, request }) => {
  await request.post(API_URL + 'utilities/login', {
    data: {
      username: ADMIN_CRED.user,
      password: ADMIN_CRED.pw,
    },
  });
  await page.goto('/');
  await expect(page).toHaveTitle('NodeBB');
});
