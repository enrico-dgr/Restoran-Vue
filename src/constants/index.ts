import api from './api'
import { type ENV } from './types'

export default {
  API: api[import.meta.env.MODE as ENV],
}
