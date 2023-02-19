export default {
    setData(ctx) {
     let phoneData = JSON.parse(localStorage.getItem('phoneData') || []);
        const totalPrice = Number(localStorage.getItem('totalPrice') || 0),
              totalMount = Number(localStorage.getItem('totalMount') || 0),
              catData = JSON.parse(localStorage.getItem('catData')) || []
        ctx.commit('SET_DATA',{
            phoneData,
            totalPrice,
            totalMount,
            catData
        })
    },
    addMount(ctx,payload) {
        ctx.commit('ADD_MOUNT',payload)
    },
    setCatData(ctx,payload) {
        ctx.commit('SET_CATDATA',payload)
    }
}