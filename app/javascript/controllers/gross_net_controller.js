import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ 'grossAmount', 'deductionAmount', 'netAmount' ]

  connect() {
    console.log('connected')
  }
  updateNetAmount () {
    const netAmount = this.grossAmount() - this.deductionAmount()
    this.netAmountTarget.value = netAmount
  }

  updateDeductionAmount () {
    const deductionAmount = this.grossAmount() - this.netAmount()
    this.deductionAmountTarget.value = deductionAmount
  }

  grossAmount () {
    if (this.grossAmountTarget.value == '') {
      return 0
    } else {
      return parseInt(this.grossAmountTarget.value)
    }
  }

  deductionAmount () {
    if (this.deductionAmountTarget.value == '') {
      return 0
    } else {
      return parseInt(this.deductionAmountTarget.value)
    }
  }

  netAmount () {
    return parseInt(this.netAmountTarget.value)
  }
}
