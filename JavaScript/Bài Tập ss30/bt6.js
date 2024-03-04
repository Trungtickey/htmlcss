const arr =[1,2,3,4,5];
const result = mang[arr];

function mang(arr){
    arr.sort((a, b) => a - b);
        let count = 0;
        let triangLes=[];
        for (let i = 0; i < arr.length - 2; i++) {
            let k = i + 2;
            for (let j = i + 1; j < arr.length - 1; j++) {
                while (k < arr.length && arr[i] + arr[j] > arr[k]) {
                    triangLes.push([arr[i], arr[j], arr[k]]);
                    k++;
                }
                count += k - j - 1;
            }
        }
        return {count, triangLes};
}
console.log("Số lượng tam giác được tạo ra là: ", mang(arr));
console.log("Các tam giác được tạo ra: ", triangLes);