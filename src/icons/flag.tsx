import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Flag(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M288 128h608L736 384l160 256H288v320h-96V64h96z"
      />
    </svg>
  )
}
