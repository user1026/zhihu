import {
    reqnow
} from '../../untils/http';
const state = {
    list: [],
    beforedate:[],
};

const mutations = {
    changelist(state, list) {
        state.list.push(list);
    },
    changedate(state,date){
          state.beforedate.push(date);
    }
};

const actions = {
    home(context) {
        reqnow().then(res => {
            context.commit('changedate',res.data.date)
            context.commit('changelist', res.data);
        })
    }
};
const getters = {
    getlist(state) {
        return state.list;
    },
    getdate(state) {
        return state.beforedate;
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};