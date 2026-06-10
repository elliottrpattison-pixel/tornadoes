const counterElement = document.getElementById("visitorCount")
const VISITOR_KEY = "visitorCount"
const visits = Number(localStorage.getItem(VISITOR_KEY) || 0) + 1
localStorage.setItem(VISITOR_KEY, visits)
if (counterElement) {
    counterElement.textContent = `Visitors: ${visits}`
}