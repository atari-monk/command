import { expect } from 'chai'
import { ApiTester } from 'atari-monk-api-tester-lib'
import { getRoutes } from './routes'
import { IApp } from './IApp'

describe('Test App endpoints', () => {
  const url = 'http://localhost:3000/api/v1'
  const app: IApp = {
    _id: '',
    name: 'test-app',
    description: 'test-app-description',
  }
  const appPatch: IApp = {
    ...app,
    name: 'test-app-patch',
    description: 'test-app-description-patch',
  }
  const tester = new ApiTester()
  tester.routing = getRoutes(url)

  it('should test POST request successfully', async () => {
    try {
      const response = await tester.post('create', app)

      app._id = response.data._id as string
      appPatch._id = app._id
      tester.routing = getRoutes(url, app._id)

      expect(response.status).to.equal(201)
      expect(response.data).to.include(app)
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should test GET request successfully', async () => {
    try {
      const response = await tester.get('all')

      expect(response.status).to.equal(200)
      const appDb = response.data.find((c: any) => c._id === app._id)
      expect(appDb).to.include(app)
    } catch (error) {
      console.error(error)
      throw error
    }
  })

  it('should test PATCH request successfully', async () => {
    try {
      const response = await tester.patch('update', appPatch)
      expect(response.status).to.equal(200)
      expect(response.data).to.include(appPatch)
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should test DELETE request successfully', async () => {
    const response = await tester.delete('delete')
    expect(response.status).to.equal(200)
  })
})
