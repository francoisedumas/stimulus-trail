import { Controller } from "stimulus"
import Sortable from "sortablejs"

export default class extends Controller {

  connect() {
    this.sortable = Sortable.create(this.element, {
      group: 'shared',
      animation: 150,
      handle: ".drag-handler",
      ghostClass: "bg-blue-100",
    })
  }
}
