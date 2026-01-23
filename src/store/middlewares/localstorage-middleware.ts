// import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
// import { RootState } from "@reduxjs/toolkit/query";

// export const localStorageMiddleware = ( state: MiddlewareAPI) => {
//     return (next: Dispatch) => (action: Action) => {
        
//       next(action);

//       if ( action.type === 'pokemons/toggleFavorite' ) {
//         const { pokemons } = state.getState() as RootState;
//         localStorage.setItem('favorite-pokemons', JSON.stringify( pokemons ));
//       }

//     }
// }



// import { Middleware } from '@reduxjs/toolkit';
// import { RootState} from '@/store'// ajusta la ruta a tu store

// export const localStorageMiddleware: Middleware<{}, RootState> =
//   (store) => (next) => (action) => {

//     const result = next(action);

//     if (
//       typeof action === 'object' &&
//       action !== null &&
//       'type' in action &&
//       action.type === 'pokemons/toggleFavorite'
//     ) {
//       const { pokemons } = store.getState();

//       if (typeof window !== 'undefined') {
//         localStorage.setItem(
//           'favorite-pokemons',
//           JSON.stringify(pokemons)
//         );
//       }
//     }

//     return result;
//   };




// localstorage-middleware.ts
// import { Middleware } from '@reduxjs/toolkit';

// // Tipamos correctamente con genéricos
// export const localStorageMiddleware: Middleware = 
//   (api) =>                // api = { getState, dispatch }
//   (next) =>               // next = función para pasar la acción al siguiente middleware
//   (action) => {           // action = la acción que se está despachando
//     // Aquí va tu lógica

//     // Ejemplo: guardar TODO el estado después de cada acción
//     const result = next(action);           // ¡importante! pasar la acción

//     // Opción 1: guardar todo el estado (no recomendado si es grande)
//     const state = api.getState();
//     localStorage.setItem('favorite-pokemons', JSON.stringify(state));

//     // Opción 2: guardar solo una parte (mejor performance)
//     // const pokemons = api.getState().pokemons;
//     // localStorage.setItem('pokemons', JSON.stringify(pokemons));
//     console.log({state})
//     return result;   // siempre retornar lo que devuelve next()
//   };