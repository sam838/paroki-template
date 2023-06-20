import { UtilityService } from './utility.service'

export default ({ app }, inject) => {
  inject('_cu', new UtilityService(app))
}
