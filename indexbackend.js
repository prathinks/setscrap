import { supabase } from "./supabase.js"

/* ================= REQUIREMENT FORM ================= */

const requirementForm = document.getElementById("requirementForm")

if (requirementForm) {

  requirementForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const inputs = requirementForm.querySelectorAll("input, select")

    const scrap_type = inputs[0].value
    const name = inputs[1].value
    const requirement = inputs[2].value
    const unit_name = inputs[3].value
    const city = inputs[4].value
    const phone = inputs[5].value

    const { error } = await supabase
      .from("enquiries")
      .insert([{
        scrap_type,
        name,
        requirement,
        unit_name,
        city,
        phone
      }])

    if (error) {
      alert("Submission failed")
      console.error(error)
    } else {
      alert("Thank you. Our team will contact you soon.")
      requirementForm.reset()
    }
  })
}

/* ================= LOGIN MODAL ================= */

const loginModal = document.getElementById("loginModal")

if (loginModal) {

  const loginButton = loginModal.querySelector("button")

  loginButton.addEventListener("click", async () => {

    const inputs = loginModal.querySelectorAll("input")

    const name = inputs[0].value
    const phone = inputs[1].value

    const { error } = await supabase
      .from("logins")
      .insert([{ name, phone }])

    if (error) {
  console.error("Insert error:", error)
  alert(error.message)
} else {
  alert("Login submitted")
  loginModal.style.display = "none"
}
  })
}