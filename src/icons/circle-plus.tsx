import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function CirclePlus(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"
      />
      <path
        fill="currentColor"
        d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"
      />
      <path
        fill="currentColor"
        d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      />
    </svg>
  )
}
