import { supabase } from "./supabase.js"

const quoteForm = document.getElementById("quoteForm")

if (quoteForm) {

  quoteForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Collect values
    const product = document.getElementById("productInput").value.trim()
    const name = document.getElementById("userName").value.trim()
    const quantity = document.getElementById("quantity").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const city = document.getElementById("city").value.trim()

    // Basic validation
    if (!product || !name || !quantity || !phone) {
      alert("Please fill all required fields")
      return
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("product_quotes")
      .insert([
        {
          product_name: product,
          name: name,
          quantity: quantity,
          phone: phone,
          city: city
        }
      ])

    if (error) {
      console.error("Insert error:", error)
      alert(error.message)
    } else {
      console.log("Inserted:", data)

      // Show success message
      const successMsg = document.getElementById("successMessage")
      successMsg.style.display = "block"

      quoteForm.reset()

      setTimeout(() => {
        successMsg.style.display = "none"
      }, 3000)
    }
  })
}