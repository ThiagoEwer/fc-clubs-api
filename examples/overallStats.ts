import { EAFCApiService } from '../src/api'

const apiService = new EAFCApiService()
const overallStats = async () =>
  apiService.overallStats({
    clubIds: '8960672',
    platform: 'common-gen5',
  })

overallStats().then(console.log).catch(console.error)
