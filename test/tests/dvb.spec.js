const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173')
})

test.describe('Testing page', () => {
  // Testing for the title page
  test('should show Dolce Veleno Bakery as the page title', async ({ page }) => {
    await expect(page).toHaveTitle('Dolce Veleno Bakery')
  })
  // Testing for the title page when is Vite + React
  test('should show a title -> Vite + React', async ({ page }) => {
    const titleInPage = await page.getByText('Vite + React')

    await expect(titleInPage).toBeVisible()
  })

  // Testing for the logo of the page
  test('should show the DVB logo', async ({ page }) => {
    const IconLight = await page.getByTestId('dvb')

    await expect(IconLight).toBeVisible()
  })

  // Testing of title main in the home <h1>
  test('should show a title -> Descubre la magia y el sabor de nuestros postres', async ({ page }) => {
    const titleInPage = await page.getByText('Descubre la magia y el sabor de nuestros postres')

    await expect(titleInPage).toBeVisible()
  })

  // test if the button is visible by selector
  test('should show the button', async ({ page }) => {
    const button = await page.getByRole('button')

    await expect(button).toBeVisible()
  })

  // Testing when click on the whatever options in the navbar (catálogo)
  test('should go to other page', async ({ page }) => {
    await page.goto('http://localhost:5173/catalogo')
    await page.getByText('Catálogo').click()
  })
  // test show array products_1
  test('should show array products visible in home', async ({ page }) => {
    const Productos = await page.getByTestId('products_1')

    await expect(Productos).toBeVisible()
  })
})
