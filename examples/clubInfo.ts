import { EAFCApiService } from '../src/api'

const apiService = new EAFCApiService()
const search = async () =>
  apiService.clubInfo({
    clubIds: '8960672',
    platform: 'common-gen5',
  })

search()
  .then(c => console.log(c['8960672']))
  .catch(console.error)
