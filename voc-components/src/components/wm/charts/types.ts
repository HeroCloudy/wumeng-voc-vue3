import type {
  BarSeriesOption,
  ComposeOption,
  DatasetComponentOption,
  GridComponentOption,
  LineSeriesOption,
  PieSeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts'

export type ECOption = ComposeOption<
  | BarSeriesOption
  | PieSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>
