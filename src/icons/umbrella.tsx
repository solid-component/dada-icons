import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Umbrella(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0m570.688-320a384.128 384.128 0 0 0-757.376 0z"
      />
    </svg>
  )
}