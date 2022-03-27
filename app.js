

const buildButton = document.getElementById('build');
const resetButton = document.getElementById('reset');
const container = document.getElementById('container');




function build() {
    const inputValue = document.getElementById('input').value;
    alert(`You entered ${inputValue} and clicked the build button!`)
}

buildButton.addEventListener('click', function() {
    build();
});
