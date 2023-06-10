import { vi } from 'vitest'
export default function Globals () {
  const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn()
  }))

  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
  // now you can access it as `IntersectionObserver` or `window.IntersectionObserver`
}
