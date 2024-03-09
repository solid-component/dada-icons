import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Histogram(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M416 896V128h192v768zm-288 0V448h192v448zm576 0V320h192v576z"
      />
    </svg>
  )
}
