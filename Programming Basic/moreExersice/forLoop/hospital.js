function hospital(input){

    let period = Number(input[0]);
    let index = 1;
    let patientsCount = Number(input[index]);
    index++;

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;

    for(let i = 1; i <= period; i++){
        
        if(i % 3 === 0 && untreatedPatients > treatedPatients){
            doctors++;
        }

        if(patientsCount <= doctors){
            treatedPatients += patientsCount;
        } else{
            untreatedPatients += patientsCount - doctors;
            treatedPatients += doctors;
        }
        patientsCount = Number(input[index]);
        index++
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital([
    '3',
    '7',
    '7',
    '7',
  
    ])