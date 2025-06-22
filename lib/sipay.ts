// Sipay API integration for Turkish payment processing
export interface SipayPaymentRequest {
  merchant_key: string
  invoice_id: string
  invoice_description: string
  name: string
  surname: string
  total: number
  items: Array<{
    name: string
    price: number
    quantity: number
  }>
  cc_holder_name: string
  cc_no: string
  expiry_month: string
  expiry_year: string
  cvv: string
  currency_code: string
  installments_number: number
  invoice_description_lang: string
  return_url: string
  cancel_url: string
}

export interface SipayPaymentResponse {
  status: string
  status_description: string
  order_id?: string
  transaction_id?: string
  redirect_url?: string
  error_code?: string
  error_description?: string
}

class SipayService {
  private apiUrl = process.env.SIPAY_API_URL || "https://provisioning.sipay.com.tr/ccpayment/api/paySmart2"
  private merchantKey = process.env.SIPAY_MERCHANT_KEY || ""
  private appId = process.env.SIPAY_APP_ID || ""
  private appSecret = process.env.SIPAY_APP_SECRET || ""

  async processPayment(paymentData: SipayPaymentRequest): Promise<SipayPaymentResponse> {
    try {
      const requestData = {
        ...paymentData,
        merchant_key: this.merchantKey,
        app_id: this.appId,
        hash: this.generateHash(paymentData),
      }

      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: SipayPaymentResponse = await response.json()
      return result
    } catch (error) {
      console.error("Sipay payment error:", error)
      return {
        status: "error",
        status_description: "Ödeme işlemi sırasında bir hata oluştu",
        error_code: "PAYMENT_ERROR",
        error_description: error instanceof Error ? error.message : "Unknown error",
      }
    }
  }

  private generateHash(paymentData: SipayPaymentRequest): string {
    // Sipay hash generation logic
    // This is a simplified version - implement according to Sipay documentation
    const hashString = `${this.merchantKey}${paymentData.invoice_id}${paymentData.total}${this.appSecret}`

    // In a real implementation, you would use crypto to generate SHA256 hash
    // For demo purposes, returning a mock hash
    return "mock_hash_" + Date.now()
  }

  async verifyPayment(transactionId: string): Promise<boolean> {
    try {
      // Implement payment verification logic
      const response = await fetch(`${this.apiUrl}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          merchant_key: this.merchantKey,
          transaction_id: transactionId,
        }),
      })

      const result = await response.json()
      return result.status === "success"
    } catch (error) {
      console.error("Payment verification error:", error)
      return false
    }
  }
}

export const sipayService = new SipayService()
