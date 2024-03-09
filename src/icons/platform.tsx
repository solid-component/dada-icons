import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Platform(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M448 832v-64h128v64h192v64H256v-64zM128 704V128h768v576z"
      />
    </svg>
  )
}
