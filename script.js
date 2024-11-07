// Function to show a specific student card
function showStudentCard(studentId) {
    // Hide all student cards
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => card.style.display = 'none');

    // Show the selected student card
    const selectedStudentCard = document.getElementById('student' + studentId);
    if (selectedStudentCard) {
        selectedStudentCard.style.display = 'block';
    }
}

// Function to toggle "Show More" information in each card
function toggleMoreInfo(studentId) {
    const moreInfo = document.getElementById("more-info-" + studentId);
    moreInfo.style.display = (moreInfo.style.display === "block") ? "none" : "block";
}

// Show the first student card by default
document.addEventListener("DOMContentLoaded", () => {
    showStudentCard(1);
});
function goHome() {
    window.location.href = 'login.html'; // Change this path to your login or home page file
}