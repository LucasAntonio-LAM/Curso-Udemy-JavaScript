function recursiva(max) {
    if(max >= 1) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);