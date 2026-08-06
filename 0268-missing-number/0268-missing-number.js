function missingNumber(nums){
    let n=nums.length;

    for(let i=0;i<=n;i++){
        if(!nums.includes(i)){
            return i
        }
    }
}
console.log(missingNumber([3,0,1,]))