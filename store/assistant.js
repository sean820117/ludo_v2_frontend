
export const state = () => ({
    data: {
        assistant_id:"",
        name:"",
        creator:"",
        type:"word",
        description:"nothing",
        accuracy: 0,
        ranks:[
            {
                rank:"A",
                keywords:[],
                active:true,
            },
            {
                rank:"B",
                keywords:[],
                active:true,
            },
            {
                rank:"C",
                keywords:[],
                active:false,
            },
            {
                rank:"D",
                keywords:[],
                active:false,
            },
            {
                rank:"E",
                keywords:[],
                active:false,
            },
        ],
    }
})

export const mutations = {
    setAll (state, data) {
        state.data = data;
        console.log(state.data)
    },
    setId (state, id) {
      state.data.assistant_id = id;
    },
    setName (state, name) {
      state.data.name = name;
    },
    setType (state, type) {
        state.data.type = type;
    },
    setDescription (state, description) {
        state.data.description = description;
    },
    setCreator (state, creator) {
        state.data.creator = creator;
    },
    setRanks (state, newRanks) {
        newRanks.forEach(function(element , index) {
            state.data.ranks.splice(index,1,element);
        });
    },
    addRank (state, rank) {
        const targetRank = state.data.ranks.find(rankData => rankData.rank == rank);
        targetRank.active = true;
    },
    removeRank (state, rank) {
        const targetRank = state.data.ranks.find(rankData => rankData.rank == rank);
        targetRank.active = false;
    },
    // updateRank (state, rankData) {
    //     const targetRank = state.data.ranks.find(rankData => rankData.rank == rankData.rank);
    //     targetRank = rankDat;
    // },
    addKeyword (state,payload) {
        const targetRank = state.data.ranks.find(rankData => rankData.rank == payload.rank);
        targetRank.keywords.push(payload.keyword);
        console.log("keywords:" + targetRank.keywords);
    },
    addExamples (state,payload) {
        const targetRank = state.data.ranks.find(rankData => rankData.rank == payload.rank);
        targetRank.examples = payload.examples;
        console.log("examples: " + targetRank.examples);
    }
}

export const getters = {
    getAllData(state) {
        return state.data;
    },
    getBasicInfo (state) {
        return {
            assistant_id:state.data.assistant_id,
            name:state.data.name,
            creator:state.data.creator,
            type:state.data.type,
            description:state.data.description,
        };
    },
    getName(state) {
        return state.data.name;
    },
    getNextRank (state) {
        const next = state.data.ranks.find(rankData => !rankData.active);
        if (next) {
            return next.rank;
        } else {
            return null;
        }
    },
    getRanks (state) {
       return state.data.ranks; 
    }
}

export const actions = {
    
}
