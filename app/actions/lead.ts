'use server'

import { client } from '@/sanity/lib/client'

export async function createLead(formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    // Note: We use a write-enabled client for server actions
    // We should create a separate client or use the token in the current client
    // Since sanity/lib/client.ts uses useCdn: true, we need a fresh one with token for writing
    
    const writeClient = client.withConfig({
      token: process.env.SANITY_API_TOKEN,
      useCdn: false,
    })

    await writeClient.create({
      _type: 'lead',
      name: `${firstName} ${lastName}`,
      email,
      phone,
      message: `Subject: ${subject}\n\n${message}`,
      submittedAt: new Date().toISOString(),
    })

    return { success: true, message: 'Thank you for your message! We will get back to you soon.' }
  } catch (error: any) {
    console.error('Error creating lead:', error)
    return { success: false, message: 'Something went wrong. Please try again later.' }
  }
}
