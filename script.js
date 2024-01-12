function submitForm() {
    const name = document.getElementById('name').value;
    const selectedYear = document.querySelector('input[name="year"]:checked');
    const isGoodStudent = document.getElementById('goodStudent').checked;

    if (name && selectedYear) {
        const year = selectedYear.value;

        // Додавання нового елемента в нумерований список
        const listItem = document.createElement('li');
        listItem.textContent = `${name} навчається на ${year} курсі та ${isGoodStudent ? 'добре' : 'не добре'} вчиться.`;

        // Додавання результату в список
        const resultList = document.getElementById('resultList');
        resultList.appendChild(listItem);

        // Очистка полів форми
        document.getElementById('myForm').reset();
    } else {
        alert('Будь ласка, заповніть всі обов\'язкові поля!');
    }
}

