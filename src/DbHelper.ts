import {Connection, Model} from 'mongoose'
import {ITracerModel} from './interface/ITracerModel'
import {TracerSchema} from './TracerModel'

export class DbHelper {
  static initModel (db: Connection, modelName = 'Tracer') {
    return db.model<ITracerModel>(modelName, TracerSchema, modelName)
  }
}
