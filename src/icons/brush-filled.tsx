import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function BrushFilled(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128zM192 512V128.064h640V512z"
      />
    </svg>
  )
}
