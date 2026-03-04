import { supabase } from "./supabase.js"

const contactForm = document.getElementById("contactForm")

if (contactForm) {

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const number = document.getElementById("number").value
    const message = document.getElementById("message").value

  const { data, error } = await supabase
  .from("contactForm")
  .insert([{
    name: name,
    phone: number,
    requirement: message
  }])

if (error) {
  console.error("Insert error:", error)
  alert(error.message)
} else {
  console.log("Inserted row:", data)
  successMsg.style.display = "block"
  contactForm.reset()
  setTimeout(() => successMsg.style.display = "none", 3000)
}
  })
}