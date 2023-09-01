import { HttpMethod, IRouting } from 'atari-monk-api-tester-api'

export const getRoutes = (url: string, commandId?: string): IRouting => {
  return {
    baseUrl: url,
    endpoints: {
      create: {
        method: HttpMethod.POST,
        endpoint: 'commands/create',
      },
      getAll: {
        method: HttpMethod.GET,
        endpoint: 'commands/all',
      },
      delete: {
        method: HttpMethod.DELETE,
        endpoint: `commands/${commandId}`,
      },
    },
  }
}
