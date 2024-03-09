import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function DCaret(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="m512 128 288 320H224zM224 576h576L512 896z"
      />
    </svg>
  )
}
