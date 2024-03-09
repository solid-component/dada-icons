import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function DeleteLocation(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32"
      />
      <path
        fill="currentColor"
        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
      />
      <path
        fill="currentColor"
        d="M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32"
      />
    </svg>
  )
}
