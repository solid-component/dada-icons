import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Minus(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      />
    </svg>
  )
}
