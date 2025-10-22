import { ReqConfig } from '../types'
import { authReqList } from './auth'
import { surveyReqList } from './survey'
import { statReqList } from './stat'

export const allReqList: ReqConfig[] = [...authReqList, ...surveyReqList, ...statReqList]
