const fileInput = document.getElementById('fileInput');
const formatSelect = document.getElementById('formatSelect');
const convertBtn = document.getElementById('convertBtn');
const downloadLink = document.getElementById('downloadLink');

function convertFile() {
    const file = fileInput.files[0];
    const format = formatSelect.value;

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const convertedFile = event.target.result;
            const blob = new Blob([convertedFile], { type: `text/${format}` });
            const url = URL.createObjectURL(blob);

            downloadLink.href = url;
            downloadLink.style.display = 'block';
            downloadLink.click();
            URL.revokeObjectURL(url);
        };

        reader.readAsText(file);
    }
}

convertBtn.addEventListener('click', convertFile);