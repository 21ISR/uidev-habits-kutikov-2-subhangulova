const formEl = document.querySelector("form.form")
const inputEl = document.querySelector(".form__input")
const habitContainerEl = document.querySelector(".habit-list")

let habbits = []

function renderHabit(habit) {
    return `
    <li class="habit">
        <div class="habit__header">
            <h2 class="habit__name">${habit.name}</h2>
            <button class="habit__delete"></button>
        </div>
        <div class="habit__days"></div>
    </li>
    `
}

function render(){
    const habitsEl = habits.map(habit => renderHabit(habit)).join("")
    habitContainerEl.innerHTML = habitsEl
}

function handleSubmit(e) {
    e.preventDefault()

    const newHabit = {
        name:inputEl.value,
        id: Date.now(),
    }

    habits.push(newHabit)

    render()
    
    inputEl.value = ""
}

formEl.addEventListener('submit', handleSubmit)
