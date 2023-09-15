import { HttpMethod, IRouting } from 'atari-monk-api-tester-api'

export const getRoutes = (url: string, appId?: string): IRouting => {
  return {
    baseUrl: url,
    endpoints: {
      create: {
        method: HttpMethod.POST,
        endpoint: 'apps/create',
      },
      delete: {
        method: HttpMethod.DELETE,
        endpoint: `apps/${appId}`,
      },
    },
  }
}
