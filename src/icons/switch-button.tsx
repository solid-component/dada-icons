import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function SwitchButton(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
      />
      <path
        fill="currentColor"
        d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"
      />
    </svg>
  )
}
