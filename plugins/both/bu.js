import { LoggingService } from './logging.service'
import { UtilityService } from './utility.service'

export default ({ app }, inject) => {
  // create an instance of the LoggingService with the prefix 'My App'
  const logging = new LoggingService('My App')
  const utlity = new UtilityService()

  // inject the service, making it available in the context, component, store, etc.
  inject('logging', logging)
  inject('_bu', utlity)
}
