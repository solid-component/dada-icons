import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function List(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M704 192h160v736H160V192h160v64h384zM288 512h448v-64H288zm0 256h448v-64H288zm96-576V96h256v96z"
      />
    </svg>
  )
}
