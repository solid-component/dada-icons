import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Management(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M576 128v288l96-96 96 96V128h128v768H320V128zm-448 0h128v768H128z"
      />
    </svg>
  )
}
