import { EAFCApiService } from '../src/api'

const apiService = new EAFCApiService()
const memberCareerStats = async () =>
  apiService.memberCareerStats({
    clubId: '8960672',
    platform: 'common-gen5',
  })

memberCareerStats().then(console.log).catch(console.error)
