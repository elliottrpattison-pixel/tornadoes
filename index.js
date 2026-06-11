const counterElement = document.getElementById("visitorCount")
const VISITOR_KEY = "visitorCount"
const visits = Number(localStorage.getItem(VISITOR_KEY) || 0) + 1
localStorage.setItem(VISITOR_KEY, visits)
if (counterElement) {
    counterElement.textContent = `Visitors: ${visits}`
}

const LIKES_KEY = "likes_count";
const DISLIKES_KEY = "dislikes_count";

// Safe wrapper check for Next.js/Framework SSR environments
const isBrowser = typeof window !== "undefined";

// Initialize counts safely from localStorage if available
let likes = isBrowser ? (parseInt(localStorage.getItem(LIKES_KEY)) || 0) : 0;
let dislikes = isBrowser ? (parseInt(localStorage.getItem(DISLIKES_KEY)) || 0) : 0;

// Grab elements from the DOM
const likeButton = document.getElementById("likeButton");
const dislikeButton = document.getElementById("dislikeButton");
const likeCountElement = document.getElementById("likeCountElement");
const dislikeCountElement = document.getElementById("dislikeCountElement");

function updateLikeCount(newCount) {
    likes = newCount;
    if (isBrowser) localStorage.setItem(LIKES_KEY, likes);
    if (likeCountElement) likeCountElement.textContent = likes;
}

function updateDislikeCount(newCount) {
    dislikes = newCount;
    if (isBrowser) localStorage.setItem(DISLIKES_KEY, dislikes);
    if (dislikeCountElement) dislikeCountElement.textContent = dislikes;
}

function updateCounters() {
    if (likeCountElement) likeCountElement.textContent = likes;
    if (dislikeCountElement) dislikeCountElement.textContent = dislikes;
}

// Bind Event Listeners safely
if (likeButton) {
    likeButton.addEventListener("click", () => {
        updateLikeCount(likes + 1);
    });
}

if (dislikeButton) {
    dislikeButton.addEventListener("click", () => {
        updateDislikeCount(dislikes + 1);
    });
}

// Set numbers on initial page load
updateCounters();