import { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { DefineComponent } from 'vue'

interface FontAwesomeIconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  icon: [IconPrefix, IconName] | IconName | IconDefinition
  mask?: [IconPrefix, IconName] | IconName
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
}

interface FontAwesomeLayersProps {
  fixedWidth?: boolean
}

interface FontAwesomeLayersTextProps {
  value: string | number
  transform?: object | string
  counter?: boolean
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
}

declare const FontAwesomeIcon: DefineComponent<FontAwesomeIconProps>
declare const FontAwesomeLayers: DefineComponent<FontAwesomeLayersProps>
declare const FontAwesomeLayersText: DefineComponent<FontAwesomeLayersTextProps>
