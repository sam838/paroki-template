export class UtilityService {
  constructor (app) {
    this.app = app
  }

  // saat isi arraynya tidak hanya objeknya
  // tetapi ada getter setter dll dari vue select / table
  // gunakan ini agar arraynya bersih
  cleanArray (select) {
    const newArray = []
    select.forEach((element) => {
      const data = {}
      Object.keys(element).forEach((key) => {
        data[key] = element[key]
      })
      newArray.push(data)
    })
    return newArray
  }

  async confirmationAlert (options) {
    let title = 'Konfirmasi'
    let text = 'Apakah anda yakin?'
    if (options) {
      if (options.title && options.title !== '') {
        title = options.title
      }
      if (options.text && options.text !== '') {
        text = options.text
      }
    }
    return await this.app.$swal({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Iya',
      cancelButtonText: 'Tidak'
    })
  }
}
