import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function MagicStick(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M512 64h64v192h-64zm0 576h64v192h-64zM160 480v-64h192v64zm576 0v-64h192v64zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248z"
      />
    </svg>
  )
}
