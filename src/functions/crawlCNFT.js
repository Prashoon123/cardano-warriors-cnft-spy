import Axios from 'axios'
import { CNFT_URL } from '../constants'

const crawlCNFT = (options = {}) => {
  const payload = {
    project: options.project ?? 'Cardano Warriors',
    types: options.types ?? ['listing', 'offer'],
    search: options.search ?? undefined, // 'CardanoWarrior2682'
    sort: options.sort ?? undefined, // { price: 1 }
    page: options.page ?? 1,
    priceMin: options.priceMin ?? 0,
    priceMax: options.priceMax ?? undefined,
    verified: options.verified ?? true,
    nsfw: options.nsfw ?? false,
    sold: options.sold ?? false,
  }

  return new Promise((resolve, reject) => {
    Axios.post(CNFT_URL, payload, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => resolve(response.data.results))
      .catch((error) => reject(error))
  })
}

export default crawlCNFT
