const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function updateSteps() {
        steps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        if (currentStep < 3) {
            currentStep++;
            updateSteps();
        }
        document.getElementById('prev').disabled = currentStep === 0;
        document.getElementById('next').disabled = currentStep === 3;
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateSteps();
        }
        document.getElementById('prev').disabled = currentStep === 0;
        document.getElementById('next').disabled = currentStep === 3;
    });

    updateSteps();