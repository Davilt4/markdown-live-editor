const markdownInput = document.getElementById('markdown');
const preview = document.getElementById('preview');

function updatePreview() {
    const markdownText = markdownInput.value;
    preview.innerHTML = marked.parse(markdownText);
}

markdownInput.addEventListener('input', updatePreview);
