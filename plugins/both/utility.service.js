export class UtilityService {
  apiLink (link) {
    return '/api/v1/api' + link
  }

  strippedContent (string) {
    if (!string) {
      string = ''
    }
    return string.replace(/<\/?[^>]+>/ig, '')
  }
}
