export const state = () => ({
    assistant_id:"",
    name:"test",
    creator:"",
    type:"word",
    description:"test",
    ranks:[
        {
            rank:"A",
            keywords:["擔任","學習","使命"],
            active:true,
        },
        {
            rank:"B",
            keywords:["資格","學歷","專長"],
            active:true,
        },
        {
            rank:"C",
            keywords:["興趣","尚在","盡力"],
            active:true,
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

})

export const mutations = {
    setName (state, name) {
      state.name = name;
    },
    setType (state, type) {
        state.type = type;
    },
    setDescription (state, description) {
        state.description = description;
    },
    setCreator (state, creator) {
        state.creator = creator;
    },
    setRanks (state, newRanks) {
        newRanks.forEach(function(element , index) {
            state.ranks.splice(index,1,element);
        });
    },
    addRank (state, rank) {
        const targetRank = state.ranks.find(rankData => rankData.rank == rank);
        targetRank.active = true;
        // state.ranks.push({
        //     rank:rank,
        //     keywords:[]
        // });
        console.log("rank:" + state.ranks[0].rank);
    },
    // updateRank (state, rankData) {
    //     const targetRank = state.ranks.find(rankData => rankData.rank == rankData.rank);
    //     targetRank = rankDat;
    // },
    addKeyword (state,payload) {
        const targetRank = state.ranks.find(rankData => rankData.rank == payload.rank);
        targetRank.keywords.push(payload.keyword);
        console.log("keywords:" + targetRank.keywords);
    },
    addExamples (state,payload) {
        const targetRank = state.ranks.find(rankData => rankData.rank == payload.rank);
        targetRank.examples = payload.examples;
        console.log("examples: " + targetRank.examples);
    }
}

export const getters = {
    getAllData(state) {
        return state;
    },
    getBasicInfo (state) {
        info = {
            assistant_id:state.assistant_id,
            name:state.name,
            creator:state.creator,
            type:state.type,
            description:state.description,
        }
        return info;
    },
    getNextRank (state) {
        const next = state.ranks.find(rankData => !rankData.active);
        if (next) {
            return next.rank;
        } else {
            return null;
        }
    },
    getRanks (state) {
       return state.ranks; 
    }
}

