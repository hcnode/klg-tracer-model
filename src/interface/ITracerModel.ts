import {Document} from 'mongoose'
import {ITracer} from './ITracer'

/**
 * 用于数据库持久化,会带上 mongoose 的操作方法
 */
export interface ITracerModel extends ITracer, Document {
  updateStatus (): ITracerModel

  done (): ITracerModel

  fail (): ITracerModel
}
