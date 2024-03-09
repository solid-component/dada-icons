import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Fold(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384 128 512l192 128z"
      />
    </svg>
  )
}
