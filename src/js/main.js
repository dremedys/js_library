import './lib/lib'

$('button').fadeIn(3000)

$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="" class="dropdown-item">Action</a>
            <a href="" class="dropdown-item">Action #2</a>
            <a href="" class="dropdown-item">Action #3</a>
        </div>
    </div>
    `
)

$('.dropdown-toggle').dropdown()

$('#trigger').click(() =>
    $('#trigger').createModal({
        text: {
            title: 'Hello from lib',
            body: 'I love lorem (no)'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger','mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success','p-20'],
                    false,
                    () => {
                        alert('Thanks')
                    }
                ],
                [
                    'Another button',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hello world')
                    }
                ]
            ]
        }
    })
)

$().get('https://jsonplaceholder.typicode.com/todos/1','json')
    .then(res => {
        console.log(res)})
