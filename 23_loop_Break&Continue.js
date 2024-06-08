let i = 0;
while (i <= 10) {
    // break
    if (i === 5) break;

    // continue
    if (i % 2 ===0){
        i++;
        continue;
    }

    console.log(i);
    i++;

}
