import type { Component } from 'vue'
import type { WmVocInfoPropsType } from '@/components/wm/voc/info/props.ts'
import type { WmVocInputPropsType } from '@/components/wm/voc/input/props.ts'
import type { WmVocTitlePropsType } from '@/components/wm/voc/title/props.ts'
import type { WmVocTextareaPropsType } from '@/components/wm/voc/textarea/props.ts'

export type VocComponentPropsType = WmVocInfoPropsType &
  WmVocInputPropsType &
  WmVocTitlePropsType &
  WmVocTextareaPropsType

/**
 * 每个组件需要导出的配置信息的结构定义
 */
export interface ComponentConfig {
  type: string
  title: string
  defaultProps: Partial<VocComponentPropsType>
  component: Component
  propComponent: Component
  statComponent?: Component
}
