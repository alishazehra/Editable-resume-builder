window.onload = function () {
    var submitBtn = document.getElementById('submitBtn');
    var resumeForm = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    submitBtn.addEventListener('click', function () {
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var skills = document.getElementById('skills').value.split(',');
        var experience = document.getElementById('experience').value.split(',');
        if (!fullName || !email || !phone || skills.length === 0 || experience.length === 0) {
            alert('Please fill out all fields');
            return;
        }
        resumeOutput.innerHTML = "\n            <h2>".concat(fullName, "'s Resume</h2>\n            <div class=\"info\"><strong>Email:</strong> ").concat(email, "</div>\n            <div class=\"info\"><strong>Phone:</strong> ").concat(phone, "</div>\n            <div class=\"info\"><strong>Skills:</strong> ").concat(skills.join(', '), "</div>\ndiv class=\"info\"><strong>Experience:</strong> ").concat(experience.join(', '), "</div>\n        ");
    });
};
