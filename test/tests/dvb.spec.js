const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('Testing page', () => {
  test('should show Dolce Veleno Bakery as the page title', async ({ page }) => {
    await expect(page).toHaveTitle('Dolce Veleno Bakery')
  })

  test('should show a title -> Vite + React', async ({ page }) => {
    const titleInPage = await page.getByText('Vite + React')

    await expect(titleInPage).toBeVisible()
  })

  test('should show a title -> Descubre la magia y el sabor de nuestros postres', async ({ page }) => {
    const titleInPage = await page.getByText('Descubre la magia y el sabor de nuestros postres')

    await expect(titleInPage).toBeVisible()
  })

  test('should show the DVB logo', async ({ page }) => {
    const IconLight = await page.getByTestId('dvb')

    await expect(IconLight).toBeVisible()
  })

  // test if the button is visible by selector
  test('should show the button', async ({ page }) => {
    const button = await page.getByRole('button')

    await expect(button).toBeVisible()
  })
  // test if the button is visible by selector
})
