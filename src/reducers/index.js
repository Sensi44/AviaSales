import { combineReducers } from 'redux';

import checkBoxes from './checkBoxes';
// import tickets from './tickets';
// import filters from './filters';

export default combineReducers({
  checkBoxes,
});

// На выходе мы получаем редьюсер, который обрабатывает экшены,
// которые отправляют диспатчеры, в результате чего меняется сторовский стэйт
// который мы через коннект и прочие достойные функции рассылает
// с помощью пропсов по компонентам представлениям

// const todoApp = combineReducers({
//   checkBoxes,
//   tickets
// })
// Полностью эквивалентно этому коду
// export default function todoApp(state = {}, action) {
//   return {
//     checkBoxes: checkBoxes(state.checkBoxes, action),
//     tickets: tickets(state.tickets, action)
//   }
// }
