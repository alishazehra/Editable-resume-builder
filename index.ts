window.onload = () => {
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    submitBtn.addEventListener('click', () => {
        const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split(',');

        if (!fullName || !email || !phone || skills.length === 0 || experience.length === 0) {
            alert('Please fill out all fields');
            return;
        }

        resumeOutput.innerHTML = `
            <h2>${fullName}'s Resume</h2>
            <div class="info"><strong>Email:</strong> ${email}</div>
            <div class="info"><strong>Phone:</strong> ${phone}</div>
            <div class="info"><strong>Skills:</strong> ${skills.join(', ')}</div>
div class="info"><strong>Experience:</strong> ${experience.join(', ')}</div>
        `;
    });
};


