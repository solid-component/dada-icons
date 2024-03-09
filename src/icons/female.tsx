import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Female(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640"
      />
      <path
        fill="currentColor"
        d="M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32"
      />
      <path
        fill="currentColor"
        d="M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32"
      />
    </svg>
  )
}
