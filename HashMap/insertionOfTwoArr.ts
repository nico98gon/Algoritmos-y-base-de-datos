function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map<number, number>();
    const map2 = new Map<number, number>();
    const result: number[] = [];

    for (const num of nums1) {
        if (map1.has(num)) {
            map1.set(num, map1.get(num)! + 1);
        } else {
            map1.set(num, 1);
        }
    }

    for (const num of nums2) {
        if (map2.has(num)) {
            map2.set(num, map2.get(num)! + 1);
        } else {
            map2.set(num, 1);
        }
    }

    for (const [num, count] of map1) {
        if (map2.has(num)) {
            const commonCount = Math.min(count, map2.get(num)!);
            for (let i = 0; i < commonCount; i++) {
                result.push(num);
            }
        }
    }

    return result;
}