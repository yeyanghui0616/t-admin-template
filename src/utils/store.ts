interface IData {
    expire?: number;
    [key: string]: any;
}

export default {
    set(key: string, data: IData) {
        if (data.expire) {
            data.expire = new Date().getTime() + data.expire * 1000;
        }
        localStorage.setItem(key, JSON.stringify(data));
    },
    get(key: string): string | null | undefined {
        const item = localStorage.getItem(key);
        if (item) {
            const result = JSON.parse(item);
            if (result.expire) {
                if (result.expire < new Date().getTime()) {
                    console.log("已经过期了");
                    // 已经过期了
                    localStorage.removeItem(key);
                    return null;
                } else {
                    return result;
                }
            }
            return result;
        }
        return null;
    },
};
