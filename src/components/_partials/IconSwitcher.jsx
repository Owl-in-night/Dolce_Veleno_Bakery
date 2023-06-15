import { useEffect, useState } from 'react'
import IconDark from '../Icons/IconDark'
import IconLight from '../Icons/IconLight'
const IconSwitcher = () => {
  const [theme, setTheme] = useState('')
  useEffect(() => {
    if (window.matchMedia('prefer-color-scheme: dark').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = (element) => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <button
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' ? <IconLight /> : <IconDark />}
    </button>
  )
}
export default IconSwitcher
