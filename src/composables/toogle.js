export const useToogle =()=>{

    const toogleFunction =(bl)=>{
        bl.value = !bl.value
    }

    return{toogleFunction}
}