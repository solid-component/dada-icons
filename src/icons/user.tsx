import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function User(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      />
    </svg>
  )
}
