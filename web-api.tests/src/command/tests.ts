import { expect } from 'chai'
import { ApiTester } from 'atari-monk-api-tester-lib'
import { getRoutes } from './routes'

describe('Test Command endpoints', () => {
  const url = 'http://localhost:3000/api/v1'
  const command: ICommand = {
    _id: '',
    command: 'test-command',
    description: 'test-description',
  }
  const commandPatch: ICommand = {
    ...command,
    command: 'test-command-patch',
    description: 'test-description-patch',
  }
  const tester = new ApiTester()
  tester.routing = getRoutes(url)

  it('should test POST request successfully', async () => {
    try {
      const response = await tester.post('create', command)

      command._id = response.data._id as string
      commandPatch._id = command._id
      tester.routing = getRoutes(url, command._id)

      expect(response.status).to.equal(201)
      expect(response.data).to.include(command)
    } catch (error) {
      console.log(error)
      throw error
    }
  })

  it('should test GET request successfully', async () => {
    try {
      const response = await tester.get('all')

      expect(response.status).to.equal(200)
      const cmdDb = response.data.find((c: any) => c._id === command._id)
      expect(cmdDb).to.include(command)
    } catch (error) {
      console.error(error)
      throw error
    }
  })

  it('should test PATCH request successfully', async () => {
    try {
      const response = await tester.patch('update', commandPatch)
      expect(response.status).to.equal(200)
      expect(response.data).to.include(commandPatch)
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
