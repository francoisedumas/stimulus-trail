import { Controller } from "stimulus"
import { marked } from 'marked/lib/marked.cjs'

export default class extends Controller {

  static targets = ["viewer"]

  convertToMarkdown(event) {
    this.viewerTarget.innerHTML = marked(event.target.value, {sanitized: true});
  }
}
