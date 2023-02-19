export default {
    SET_DATA(state, data) {
        const { phoneData,
            totalPrice,
            totalMount,
            catData } = data
        state.phoneData = phoneData
        state.totalPrice = totalPrice
        state.totalMount = totalMount
        state.catData = catData
    },
    ADD_MOUNT(state, payload) {
        const { price, type } = payload
        switch (type) {
            case 'MINUS':
                state.totalMount -= 1
                state.totalPrice -= price
                break
            case 'PLUS':
                state.totalMount += 1
                state.totalPrice += price
                break
            default:
                break
        }

    },
    SET_CATDATA(state, payload) {
        const { id, img, name, price, slogan, type } = payload
        const index = state.catData.findIndex(item => item.id === id)
        // console.log(index);
        if (index !== -1) {
            switch (type) {
                case 'MINUS':
                    state.catData[index].totalMount -= 1;
                    state.catData[index].totalPrice -= price;
                    if (!state.catData[index].totalMount) {
                        state.catData = state.catData.filter(item => item.id !== id)
                    }
                    break
                case 'PLUS':
                    state.catData[index].totalMount += 1
                    state.catData[index].totalPrice += price
                    break
                default:
                    break
            }

        } else {
            state.catData.push(
                { id, img, name, price, slogan, totalMount: 1, totalPrice: price }
            )
        }

    }
}