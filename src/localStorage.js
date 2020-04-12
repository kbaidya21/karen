export const loadState = () =>{
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore eroors
    }
};

export const saveData = (key, data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (err) {
        // Ignore errors
    }
}

export const loadData = (key) => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null){
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (err) {
        return undefined;
    }
}