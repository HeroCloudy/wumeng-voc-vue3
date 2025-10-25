import type { Component } from 'vue'
import type { WmVocInfoPropsType } from '@/components/wm/voc/info/props.ts'

export type VocComponentPropsType = WmVocInfoPropsType // VocInputPropsType &

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
