import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://localhost:5173/');

  // Get started on the homepage
  await expect(page).toHaveTitle('Pizza Shop');

  const getStartedBtn = page.getByRole('button', { name: 'Get started' });
  await getStartedBtn.click();

  // Login
  await page.getByLabel('@').fill('test@user.com');
  await page.getByLabel('🔒').fill('toomanysecrets');
  await page.getByRole('button', { name: 'Login' }).click();

  // Order some pizzas
  const buyButton = page.getByRole('button', { name: 'Buy now!' });
  for (let i = 0; i < 30; i++) {
    await buyButton.press('Enter');
  }
  const pizzaBox = page.getByTestId('pizza-box');
  await expect(pizzaBox).toHaveText(/^(🍕|❌){30}$/);
});
