import { useSyncExternalStore } from 'react'

const DARK_QUERY = '(prefers-color-scheme: dark)'

const subscribe = (onChange: () => void) => {
  const query = matchMedia(DARK_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const isDark = () => matchMedia(DARK_QUERY).matches

export function useDarkScheme() {
  return useSyncExternalStore(subscribe, isDark, () => false)
}
