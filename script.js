<script>
  // Mock LinkedIn Profiles
  const mockProfiles = {
    "https://linkedin.com/in/john-doe": {
      name: "John Doe",
      completeness: "High",
      activity: "Active",
      connections: 750,
      endorsements: 25,
      verified: true,
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "https://linkedin.com/in/jane-smith": {
      name: "Jane Smith",
      completeness: "Medium",
      activity: "Inactive",
      connections: 300,
      endorsements: 10,
      verified: false,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  };

  // Updated Profile Verification Function
  function verifyProfile() {
    const url = document.getElementById('profile-url').value.trim();
    const profile = mockProfiles[url];
    const resultBox = document.getElementById('result');
    const profileInfo = document.getElementById('profile-info');
    const loadingMessage = document.getElementById('loading-message');

    resultBox.innerText = "";
    profileInfo.innerHTML = "";
    loadingMessage.innerText = "🔍 Analyzing profile...";

    setTimeout(() => {
      let resultMessage = "";

      if (profile) {
        loadingMessage.innerText = "";

        profileInfo.innerHTML = `
          <img src="${profile.image}" alt="Profile Image">
          <h3>${profile.name}</h3>
        `;

        resultMessage += `👤 Name: ${profile.name}\n`;
        resultMessage += `📄 Profile Completeness: ${profile.completeness}\n`;
        resultMessage += `📈 Activity Level: ${profile.activity}\n`;
        resultMessage += `👥 Connections: ${profile.connections}\n`;
        resultMessage += `🌟 Endorsements: ${profile.endorsements}\n`;
        resultMessage += `✅ Verified Account: ${profile.verified ? "Yes" : "No"}\n`;

        // Credibility Score Calculation
        let credibilityScore = 0;
        if (profile.completeness === "High") credibilityScore += 30;
        if (profile.activity === "Active") credibilityScore += 25;
        if (profile.connections > 500) credibilityScore += 25;
        if (profile.endorsements > 20) credibilityScore += 10;
        if (profile.verified) credibilityScore += 10;

        resultMessage += `\n🎯 Credibility Score: ${credibilityScore}%`;
      } else {
        loadingMessage.innerText = "";
        resultMessage = `❌ No profile found.\nTry:\n• https://linkedin.com/in/john-doe\n• https://linkedin.com/in/jane-smith`;
      }

      resultBox.innerText = resultMessage;
    }, 1500);
  }
</script>
