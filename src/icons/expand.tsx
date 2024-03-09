import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Expand(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M128 192h768v128H128zm0 256h512v128H128zm0 256h768v128H128zm576-352 192 160-192 128z"
      />
    </svg>
  )
}
