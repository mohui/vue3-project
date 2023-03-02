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
        // 添加tab
        addTab(state: State, tab:Itab) {
            const isSome = state.tabsList.some((item)=> item.path == tab.path);
            if (!isSome) {
                state.tabsList.push(tab)
            }
        },
        // 删除tab
        closeCurrentTab(state: State, targetName: string) {
            const index = state.tabsList.findIndex((item) => item.path == targetName);
            state.tabsList.splice(index, 1);
        }
    },
    getters: {
        getAddTab(state: State) {
            return state.tabsList;
        }
    }
})