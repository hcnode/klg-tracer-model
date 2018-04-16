import * as mongoose from 'mongoose'
import {TestHelper} from './TestHelper'
import {TracerCRUD} from './TracerCRUD'

describe('TracerCRUD test', async function () {
  let Tracer: TracerCRUD

  const tracer = {
    userId: 'uu',
    traceId: '122342343',
    name: 'in',
    tags: {
      url: 'hao123',
      query: {a: 1}
    }
  }

  beforeAll(async () => {
    // mockgoose 会下载一个 mongodb 实例，所以这里要等待比较久
    jest.setTimeout(200e3)
    const db = await TestHelper.initMockDbConnection()
    Tracer = new TracerCRUD(db)
  })

  it(' save ', async () => {
    await Tracer.save(tracer)
    const tracers = await Tracer.model.find()
    console.log('tracers', tracers)
    expect(tracers.length).toEqual(1)
    expect(tracers[0].userId).toEqual(tracer.userId)
    expect(tracers[0].traceId).toEqual(tracer.traceId)
  })

  it(' patch save ', async () => {
    await Tracer.patchSave([tracer, tracer])

    const count = await Tracer.model.count({})
    console.log('count', count)
    expect(count).toEqual(3)
  })

  afterAll((done) => {
    mongoose.disconnect(done)
  })
})
