const copyBtn = document.querySelector('button')
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click', () => {
    textarea.select()
    let textValue = textarea.value;

    navigator.clipboard.writeText(textValue)
    copyBtn.innerText = 'Copied'
        copyBtn.style.backgroundColor = '#03A9F4'

    setTimeout(() => {
        copyBtn.innerText = 'Copy'
        copyBtn.style.backgroundColor = '#83e5fc'
    }, 1500);
})