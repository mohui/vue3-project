import {createStore} from 'vuex';
import {Itab} from './type'
interface State {
    tabsList: Array<Itab>,
    contextMenuTabId: string
}

export const store = createStore<State>({
    state: {
        tabsList: [],
        contextMenuTabId: ''
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
        },
        // 右键打卡菜单保存path
        saveCurContextTabId(state: State, curtextMenuTabId) {
            state.contextMenuTabId = curtextMenuTabId;
        },
        // 删除所有tab
        closeAllTabs(state: State) {
            state.tabsList = [];
            // 清除缓存
            sessionStorage.removeItem('TABS_ROUTES');
        },
        // 删除其他tab
        closeOtherTabs(state: State, par: string) {
            if (par == 'other') {
                // 删除其他
                state.tabsList = state.tabsList.filter((item) => item.path == state.contextMenuTabId)
            } else if (par == 'left') {
                // 删除左边, 拿到索引
                const  index = state.tabsList.findIndex(item => item.path == state.contextMenuTabId)
                state.tabsList.splice(0, index);
            } else if (par == 'right') {
                const  index = state.tabsList.findIndex(item => item.path == state.contextMenuTabId)
                state.tabsList.splice(index + 1 );
            }
        }
    },
    getters: {
        getAddTab(state: State) {
            return state.tabsList;
        }
    }
})