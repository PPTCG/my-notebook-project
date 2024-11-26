const sheetAPI = "https://script.google.com/macros/s/AKfycbw3Zlsxa4WfvcmA52yTDwIEnIqK1nJfiipJDRs8zXO5LlqMqlzIvrIqpchkq-3GJKSK8Q/exec";

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
    }

    try {
        const response = await fetch(sheetAPI);
        if (!response.ok) throw new Error("Failed to fetch user data");

        const users = await response.json();
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert(`Welcome, ${user.username}!`);
            window.location.href = "DASHBOARD.html";
        } else {
            alert("Invalid username or password.");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred. Please try again.");
    }
});
