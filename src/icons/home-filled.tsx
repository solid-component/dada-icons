import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function HomeFilled(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
      />
    </svg>
  )
}
