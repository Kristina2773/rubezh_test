// Определяем массив
let arr_device_time = ["2016-06-09T15:03:23.000Z", "2016-04-09T18:03:23.000Z", "2016-06-02T11:03:23.000Z",
    "2016-05-19T23:03:23.000Z", "2016-06-04T15:03:23.000Z", "2016-06-08T19:03:23.000Z",
    "2016-06-08T19:03:23.000Z"];
let arr_description = ['Сброс состояния: тесты', 'Тест-кнопка', 'Корпус открыт', 'Устройство зарегистрировано',
    'Исполнительное устройство обнаружено', "Статус 'тест-кнопка': сброшено"];
let arr_device = ['Рубеж 2ОП3, 1.1.1', 'Рубеж 2ОП3, 1.1.2'];
let arr_address_device = ['АМ-4П, 1.2.1', 'РМ-4, 1.2.5', 'РМ-4, 1.2.8', 'РМ-4, 1.2.6', 'РМ-4, 1.2.7'];
let arr_zone = ['Зона 1', 'Зона 2', 'Зона 3', 'Зона 4', 'Зона 5', 'Зона 6', 'Зона 7'];
let arr_event_code = [3456, 7643, 9170, 6490, 1780, 9217, 5555, 1385, 1983];
let arr_operator = ['Виктор', 'Максим', 'Владимир', 'Николай', 'Сергей', 'Григорий'];

// Получаем случайный ключ массива
// let rand_device_time = Math.floor(Math.random() * arr_device_time.length);
// let rand_description = Math.floor(Math.random() * arr_description.length);
// let rand_device = Math.floor(Math.random() * arr_device.length);
// let rand_address_device = Math.floor(Math.random() * arr_address_device.length);
// let rand_zone = Math.floor(Math.random() * arr_zone.length);
// let rand_event_code = Math.floor(Math.random() * arr_event_code.length);
// let rand_operator = Math.floor(Math.random() * arr_operator.length);

let arr = [];
for (let i = 0; i < 50; i++) {
    let rand_device_time = Math.floor(Math.random() * arr_device_time.length);
    let rand_description = Math.floor(Math.random() * arr_description.length);
    let rand_device = Math.floor(Math.random() * arr_device.length);
    let rand_address_device = Math.floor(Math.random() * arr_address_device.length);
    let rand_zone = Math.floor(Math.random() * arr_zone.length);
    let rand_event_code = Math.floor(Math.random() * arr_event_code.length);
    let rand_operator = Math.floor(Math.random() * arr_operator.length);

    arr.push (
        {
            "number":i+1,
            "device_time":(new Date(arr_device_time[rand_device_time])).toDateString(),
            "operator": arr_operator[rand_operator],
            "device": arr_device[rand_device],
            "description": arr_description[rand_description],
            "address_device": arr_address_device[rand_address_device],
            "zone": arr_zone[rand_zone],
            "event_code": arr_event_code[rand_event_code],
        }
    )

}
//console.log(arr)

    export default arr