import { JSX } from 'solid-js'
import { IconProps } from './types'
export default function TakeawayBox(props: IconProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14px" {...props}>
      <path
        fill="currentColor"
        d="M832 384H192v448h640zM96 320h832V128H96zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64"
      />
    </svg>
  )
}