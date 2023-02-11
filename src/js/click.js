const elementList = [...document.querySelectorAll('.one-unit')]

elementList.forEach(el =>{
    el.addEventListener('click', elementClick)
})

function elementClick(event) {
    console.log('here');
    console.log(event);
    const target = event.currentTarget
    console.log(target);

    const addUnit = target.classList.contains('add-unit')
    console.log(addUnit);

    if(addUnit) {
        addUnitFunc(target)
    }else {
        selectUnitFunc(target)
    }
}

function addUnitFunc(target) {

    const newUnit = document.createElement('div')
    newUnit.classList.add('one-unit')
    newUnit.innerHTML = `
    <span class="currency">New</span>
    <div>
    <span class="num">66</span>
    <span class="symbol">%</span>
    </div>
    `

    // 从尾部插入新钱包
    target.parentNode.insertBefore(newUnit, target)
    // 从头部插入新钱包
    // target.parentNode.insertBefore(newUnit,target.parentNode.firstElementChild)

    newUnit.addEventListener('click', elementClick)
}

function selectUnitFunc(target) {
    const elementList = [...document.querySelectorAll('.one-unit')]

    elementList.some(el => {
        if(el.classList.contains('selected-unit')) {
            el.classList.remove('selected-unit')
            return false
        }
    })

    // elementList.every(el => {
    //     if(el.classList.contains('selected-unit')) {
    //         el.classList.remove('selected-unit')
    //         return false
    //     } else {
    //         return true
    //     }
    // })

    // for (let el of elementList) {
    //     el.classList.remove('selected-unit')
    // }

    target.classList.add('selected-unit')

}