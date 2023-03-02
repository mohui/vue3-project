import {createStore} from 'vuex';
import {Itab} from './type'
interface State {
    tabsList: Array<Itab>
}

export const store = createStore<State>({
    state: {
        tabsList: []
    },
    mutations: {
        addTab(state: State, tab:Itab) {
            const isSome = state.tabsList.some((item)=> item.path == tab.path);
            if (!isSome) {
                state.tabsList.push(tab)
            }
        }
    },
    getters: {
        getAddTab(state: State) {
            return state.tabsList;
        }
    }
})