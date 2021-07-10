// Обработка форм

const inputFile: NodeListOf<Element> = document.querySelectorAll('input[type="file"]');

// загрузка файлов
inputFile.forEach(function (el) {

    el.addEventListener('change', function () {
        const parentForm = el.closest('form');

        if(parentForm){
            const fileInputText = parentForm.querySelector('.file-input_text');
            //@ts-ignore
            fileInputText.textContent = el.files[0].name;
            //@ts-ignore
            fileInputText.classList.remove('hidden');
            //@ts-ignore
            parentForm.querySelector('label[for="file-input"]').classList.add('hidden');
            //@ts-ignore
            parentForm.querySelector('.text_error').classList.add('hidden');
        }

    });
});
