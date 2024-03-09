import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function VideoPause(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32m192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32"
      />
    </svg>
  )
}
