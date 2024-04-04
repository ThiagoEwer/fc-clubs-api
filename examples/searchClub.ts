import { EAFCApiService } from '../src/api'

const apiService = new EAFCApiService()
const search = async () =>
  apiService.searchClub({
    clubName: 'Saint Paul Cart',
    platform: 'common-gen5',
  })

search().then(console.log).catch(console.error)
