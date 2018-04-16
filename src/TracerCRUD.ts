import {Model, Connection} from 'mongoose'
import {ITracerModel} from './interface/ITracerModel'
import {DbHelper} from './DbHelper'

export class TracerCRUD {
  private _model: Model<ITracerModel>
  get model (): Model<ITracerModel> {
    return this._model
  }

  constructor (db: Connection, modelName?) {
    if (!db) throw new Error('必须传入 mongoose db 对象完成 db 初始化')
    this._model = DbHelper.initModel(db, modelName)
  }

  async save (log: object) {
    return await new this._model(log).save()
  }

  async patchSave (logs: Array<object>) {
    return await this._model.create(logs)
  }
}
