enum month{
    jan,feb,march,april,may,june,july,aug,sep,oct,nov,dec
    //jan=1,feb,march,april,may,june,july,aug,sep,oct,nov,dec
};
console.log(month);

function Summer(Month: month) {
    let Sum: boolean;
    switch (Month) {
      case month.june:
      case month.july:
      case month.aug:
        Sum = true;
        break;
      default:
        Sum = false;
        break;
    }
    return Sum;
  }
  console.log(Summer(month.july));
  console.log(Summer(month.dec));

  enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

  let request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
else{
    console.log('error');
    
}

