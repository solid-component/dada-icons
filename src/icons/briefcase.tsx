import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function Briefcase(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M320 320V128h384v192h192v192H128V320zM128 576h768v320H128zm256-256h256.064V192H384z"
      />
    </svg>
  )
}
