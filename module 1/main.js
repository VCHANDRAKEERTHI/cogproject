function validatePhone(el) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(el.value)) {
      alert("Please enter a valid 10-digit phone number.");
      el.focus();
    }
  }
  
  function showFee(event) {
    const value = event.target.value;
    const fee = value === "Music" ? 100 : 50;
    document.getElementById("feeDisplay").textContent = `Event Fee: ₹${fee}`;
    localStorage.setItem("preferredEvent", value);
  }
  
  function countChars(el) {
    document.getElementById("charCount").textContent = `Characters: ${el.value.length}`;
  }
  
  function confirmSubmission() {
    document.getElementById("formOutput").value = "Registration Successful!";
  }
  
  function enlargeImage(el) {
    el.style.width = "200px";
  }
  
  function videoReady() {
    document.getElementById("videoStatus").textContent = "Video is ready to play!";
  }
  
  function findLocation() {
    const output = document.getElementById("map");
    if (!navigator.geolocation) {
      output.textContent = "Geolocation not supported.";
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        output.textContent = `Your Coordinates: Latitude ${latitude}, Longitude ${longitude}`;
      },
      error => {
        output.textContent = `Error: ${error.message}`;
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }
  
  function loadPreferences() {
    const eventType = localStorage.getItem("preferredEvent");
    if (eventType) {
      const dropdown = document.getElementById("eventType");
      dropdown.value = eventType;
      showFee({ target: dropdown });
    }
  }
  
  function clearPreferences() {
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences have been cleared.");
    document.getElementById("feeDisplay").textContent = "";
  }
  
  function confirmExit() {
    const name = document.getElementById("name").value;
    if (name) return "Are you sure you want to leave this page?";
  }
  